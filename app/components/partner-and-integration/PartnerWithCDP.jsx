import React from "react";
import BecomePartnerSectionStyle from "../../styles/BecomePartner.css";
import PartnerSecondLogo from "../../assets/images/partner-logo-2.png";
export const links = () => [
  { rel: "stylesheet", href: BecomePartnerSectionStyle },
];

const RedCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle cx="12" cy="12" r="8" fill="red" />
  </svg>
);
const GreenCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle cx="12" cy="12" r="8" fill="green" />
  </svg>
);
function PartnerWithCDP({ SectionHeading, details }) {
  return (
    <>
      <section className="custom-become-partner partner-with-cdp">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div>
              <h2 className="text-center mt-2 mb-5 sub-heading">
                {SectionHeading}
              </h2>
            </div>

            <div className="col-sm-5 col-12">
              <div>
                <img
                  src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/partner-page/CDP%20banner_03%20(1).png"
                  alt="Collaborat with customer dashboard pro"
                  title="Collaborat with customer dashboard pro"
                  className="w-100 collaborate-image-become-partner"
                />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="third-partner-section">
                {details.map((detail, index) => (
                  <div className="pt-4 d-flex gap-2" key={index}>
                    <div>
                      <p>{index % 2 === 0 ? RedCircleIcon : GreenCircleIcon}</p>
                    </div>
                    <div>
                      <h3 className="fw-600 heading">{detail.title}</h3>
                      <p className="description mt-2">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerWithCDP;
