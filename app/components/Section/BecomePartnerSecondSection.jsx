import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import PartnerSecondLogo from "../../assets/images/partner-logo-2.png";
export default function BecomePartnerSecondSection() {
  const BlackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="black"
    >
      <path d="M7.41 16.59L12 12l-4.59-4.59L9 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );

  const OrangeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="#eb4503"
    >
      <path d="M7.41 16.59L12 12l-4.59-4.59L9 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );

  return (
    <>
      <section className="custom-become-partner">
        <div className="container">
          <div className="become-partner-second-section">
            <div className="">
              <div className="row">
                <div className="mb-5 m-mb-none">
                  <h2 className="text-center mt-5 sub-heading m-mt-10">
                    Benefits of Partnering with
                    <span className="product-name">
                      Customer Dashboard Pro{" "}
                    </span>
                  </h2>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="mt-4 benfit-point">
                    <div className="pt-3">
                      <div className="d-flex">
                        <span>{BlackIcon}</span>
                        <p className="fw-600">Free Access</p>
                      </div>
                      <div>
                        <p className="benifit-description mt-2">
                          Get full access to{" "}
                          <span className="product-name">
                            Customer Dashboard Pro’s{" "}
                          </span>{" "}
                          premium features for development stores and streamline
                          your customer management process.
                        </p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="d-flex">
                        <span>{OrangeIcon}</span>
                        <p className="fw-600">App Integration</p>
                      </div>
                      <div>
                        <p className="benifit-description mt-2">
                          Seamlessly display your widgets on the
                          <span className="product-name">
                            Customer Dashboard Pro{" "}
                          </span>{" "}
                          app and reach a network of 50k+ Shopify merchants with
                          quality traffic.
                        </p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="d-flex">
                        <span>{BlackIcon}</span>
                        <p className="fw-600">Co-Marketing</p>
                      </div>
                      <div>
                        <p className="benifit-description mt-2">
                          Boost your exposure to over 50k+ users monthly through
                          banners on the{" "}
                          <span className="product-name">
                            Customer Dashboard Pro{" "}
                          </span>{" "}
                          app, website, guest blogging, and more.
                        </p>
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="d-flex">
                        <span>{OrangeIcon}</span>
                        <p className="fw-600">Priority Support</p>
                      </div>
                      <div className="benifit-description">
                        <p>
                          We understand the importance of your client's success.
                          That’s why our dedicated support team is available
                          <span className="product-name">
                            (As per our Availability)
                          </span>
                          every day, to ensure you receive the assistance you
                          need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 m-mt-10">
                  <div className="parner-img2">
                    <img
                      src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/Jayesh/CDP%20banner.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
