import React, { useState } from "react";
import { Col, Nav, Row, Tab, Button, Modal } from "react-bootstrap";
import PartnerLogo from "../../assets/images/partner-logo.webp";
import PartnerSecondLogo from "../../assets/images/partner-logo-2.png";
import { Link } from "@remix-run/react";
import BecomePartners from "../pages/BecomePartners";

export const links = () => [
  { rel: "stylesheet", href: BecomePartnerSectionStyle },
];

function BecomePartnerFirstSection(props) {
  const { handleShow } = props;
  return (
    <>
      <section className="custom-become-partner">
        <div className="container">
          <div className="partner-first-section">
            <div className=" m-mt-5">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <h1 className=" mb-4">
                    Welcome to Our  <span className="product-name"> Partner Program! </span>
                  </h1>
                  <div>
                    <h2 className=" sub-heading">
                      Partnership Opportunities with
                      <span className="product-name">
                        Customer Dashboard Pro
                      </span>
                    </h2>
                  </div>
                  <div>
                    <div>
                      <p className=" description mt-3 text-justify">
                        Unlock the full potential of Shopify stores with
                        Customer Dashboard Pro. Partner with us to enhance
                        customer experience, drive growth, and deliver value
                        through innovative eCommerce solutions.
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="row d-flex m-gap ">
                        <div className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 col-lg-5">
                          <button
                            className="become-partner-btn"
                            onClick={handleShow}
                          >
                            Become Partner
                          </button>
                        </div>
                        <div className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6  col-lg-5">
                          <Link to="/partners">
                            <button className="become-partner-btn">
                              View Partners
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 m-mt-10">
                  <div className="text-center become-partner-hero-image">
                    <div>
                      <img src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/partner-page/Welcome%20to%20Our%20Partner%20Program%20(1).png" title="Partnership with customer dashboard pro" alt="Partnership with customer dashboard pro" className="w-100 rounded" />
                    </div>
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

export default BecomePartnerFirstSection;
