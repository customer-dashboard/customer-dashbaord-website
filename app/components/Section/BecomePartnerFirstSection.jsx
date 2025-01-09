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
            <div className=" m-mt-5 ">
              <div className="row align-items-center">
                <div className="col-12 col-sm-6">
                  <h1 className=" mb-4">
                    Welcome to
                    <span className="product-name">Our Partner Program! </span>
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
                      <div className="row m-gap">
                        <div className="col-sm-6 col-12 mt-3">
                          <button
                            className="become-partner-btn"
                            onClick={handleShow}
                          >
                            Become Partner
                          </button>
                        </div>
                        <div className="col-sm-6 col-12 mt-3">
                          <Link to="/partners">
                            <button className="become-partner-btn">
                              Read More...
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 m-mt-10">
                  <div className="text-center">
                    <div>
                      <img src={PartnerSecondLogo} alt="" className="w-100" />
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
