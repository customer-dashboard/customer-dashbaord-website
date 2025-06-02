import React from "react";
import { Col, Row } from "react-bootstrap";
import { appIntegrationIcons } from "~/middleware/new-customer-account/Benifits";

function AppIntegrations() {
  return (
    <>
      <section className="app_integrations_division pt-5 pb-5">
        <div className="shopify_app_int_wraper">
          <div className="container">
            <div className="shopify_app_int_content">
              <div className="image_with_text_new_heading integration_head_count pb-4">
                <Row className="justify-content-center">
                  <Col lg={7}>
                    <div className="int_counts text-center">
                      {/* <span>40 +</span> */}
                      <img
                        src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/Benifits/40%2B.svg"
                        alt="custom integrations with custlo - shopify customer account app"
                      />
                    </div>
                    <h2 className="font-alverata-normal text-center mb-4">
                      Explore our expanding collection of{" "}
                      <span className="gradient-text">
                        shopify app integrations
                      </span>
                    </h2>
                  </Col>
                </Row>
                <div className="app_icons_row">
                  <div className="d-flex align-items-center justify-content-between">
                      {appIntegrationIcons.map((item, index) => (
                          <div className="p-2" key={index}>
                              <img
                                src={item.icon}
                                alt={item.alt.toLowerCase()}
                              />
                            </div>
                      ))}
                  </div>
                </div>
                <div className="d-flex d-flex align-items-center justify-content-center mt-5 all_int_btn">
                    <a href="/legacy-customer-account/integrations" target="_blank" className="universal-btn" rel="noopener noreferrer">See all Integrations</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppIntegrations;
