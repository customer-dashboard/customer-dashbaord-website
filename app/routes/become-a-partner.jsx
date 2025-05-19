import React, { useCallback, useEffect, useState } from "react";
import { Col, Nav, Row, Tab, Button, Modal } from "react-bootstrap";
import COntactUs from "../styles/COntactUs.css";
import BecomePartners from "../components/pages/BecomePartners";
import { useActionData } from "@remix-run/react";
import PartnerMail from "../api/PartnerMail";
import { json } from "@remix-run/node";
import { AppProvider, Frame, Toast } from "@shopify/polaris";
import Banner from "../components/Banner";
import BannerStyle from "../styles/Banner.css";
import BecomePartnerFirstSection from "../components/Section/BecomePartnerFirstSection";
import BecomePartnerSecondSection from "../components/Section/BecomePartnerSecondSection";
import BecomePartnerSectionStyle from "../styles/BecomePartner.css";
import PartnerWithCDP from "../components/partner-and-integration/PartnerWithCDP";

export const links = () => [
  { rel: "stylesheet", href: COntactUs },
  { rel: "stylesheet", href: BannerStyle },
  { rel: "stylesheet", href: BecomePartnerSectionStyle },
];
export async function action({ request }) {
  const body = await request.formData();
  const firstName = body.get("name");
  const websiteName = body.get("url");
  const chooseType = body.get("type");
  const email = body.get("email");
  const message = body.get("info");
  const data = await PartnerMail(
    firstName,
    websiteName,
    chooseType,
    email,
    message
  );
  console.log("data", data);

  return json({ data: true });
}

export const meta = () => {
  return [
    { title: "Stay Updated with the Latest Blogs | Customer Dashboard Pro" },
    {
      name: "description",
      content:
        "Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed.",
    },
    {
      name: "keywords",
      content: "Blogs, Customer Dashboard Pro Blogs, Shopify Account App Blogs",
    },
    {
      property: "og:title",
      content: "Stay Updated with the Latest Blogs | Customer Dashboard Pro",
    },
    {
      property: "og:description",
      content:
        "Stay up to date with the latest blogs on Customer Dashboard Pro. Explore a wide range of informative and insightful blog posts to gain valuable knowledge and stay informed.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://custlo.com/become-a-partner",
    },
  ];
};

function BecomePartner() {
  const formActionData = useActionData();
  const [active, setActive] = useState(false);
  const [fieldType, setFieldType] = useState({
    name: "",
    url: "",
    email: "",
    type: "Shopify App",
    info: "",
  });
  const [ShowModal, SetShowModal] = useState(false);
  const handleClose = () => SetShowModal(false); // Function to close the modal
  const handleShow = () => SetShowModal(true); // Function to show the modal
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} duration={3000} />
  ) : null;
  const handleFieldChange = (name, value) => {
    setFieldType((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log("formActionData: ", formActionData);
  useEffect(() => {
    setActive(true);
  }, [formActionData]);
  // console.log("fieldType", fieldType);
  const benefits = [
    {
      title: "Free Access",
      description: "Get full access to Customer Dashboard Pro’s premium features for development stores and streamline your customer management process.",
    },
    {
      title: "App Integration",
      description:
        "Integrate Customer Dashboard Pro with your Shopify app to enhance your store’s customer experience and boost sales.",
    },
    {
      title: "Customization",
      description:
        "Tailor Customer Dashboard Pro to your store's needs, ensuring a personalized user experience for your customers.",
    },
    {
      title: "Support",
      description:
        "Receive expert support and guidance to optimize your Shopify store's customer experience with Customer Dashboard Pro.",
    },
  ];

  const collaboration = [
    {
      title: "Website Promotion",
      description:
        "Feature each other’s apps on our websites to enhance visibility.",
    },
    {
      title: "In-App Integration",
      description:
        "Promote your app within Customer Dashboard Pro and showcase ours within your app.",
    },
    {
      title: "Guest Blogging",
      description:
        "Contribute to each other’s blogs, sharing insights and driving traffic between platforms.",
    },
    {
      title: "Social Media Shoutouts",
      description:
        "Cross-promote our apps across social media channels for greater audience reach.",
    },
  ];

  return (
    <>
      <BecomePartnerFirstSection handleShow={handleShow} />
      <BecomePartnerSecondSection />
      {/* <PartnerWithCDP
        SectionHeading="Benefits of Partnering with Customer Dashboard Pro"
        details={benefits}
      /> */}

      <PartnerWithCDP
        SectionHeading="How We Collaborate"
        details={collaboration}
      />

      {/* <Banner /> */}
      {formActionData?.data === true ? (
        <AppProvider>
          {" "}
          <div style={{ height: "0", width: "0" }}>
            <Frame>{toastMarkup}</Frame>
          </div>{" "}
        </AppProvider>
      ) : (
        ""
      )}
      <BecomePartners
        formActionData={formActionData}
        handleFieldChange={handleFieldChange}
        fieldType={fieldType}
      />
      <div className="container">
        <div>
          <hr className="partner-hr mb-5" />
          <div>
            <div className="">
              <p className="contact-description ">
                Partner with Customer Dashboard Pro to elevate merchant
                experiences, boost customer satisfaction, and grow together in
                the Shopify ecosystem. Let's create value and achieve success!
              </p>
            </div>
            <div className="mt-5">
              <h2 className="contact-heading fw-600"> Contact Information</h2>
              <p className="contact-description mt-2">
                For any partnership inquiries, please reach out to us at
                <span>
                  <a
                    href="mailto:team@customerdashboard.pro"
                    className="product-email"
                  >
                    team@customerdashboard.pro
                  </a>
                </span>
                or follow us on LinkedIn.
              </p>
            </div>
          </div>
          <hr className="partner-hr mb-4 mt-5" />
        </div>
      </div>

      <Modal
        show={ShowModal} // Display modal based on state
        onHide={handleClose} // Close modal when clicked outside or close button
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-center"
          ></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BecomePartners
            formActionData={formActionData}
            handleFieldChange={handleFieldChange}
            fieldType={fieldType}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose}>Close</Button>  */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BecomePartner;
