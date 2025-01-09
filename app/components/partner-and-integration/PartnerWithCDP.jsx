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
          <div className="row">
            <div>
              <h2 className="text-center mt-2 mb-3 sub-heading">
                {SectionHeading}
              </h2>
            </div>

            <div className="col-sm-6 col-12">
              <div>
                <img
                  src={PartnerSecondLogo}
                  alt="partner-logo"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="mt-5 third-partner-section">
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
