import React from "react";
import { Col, Row } from "react-bootstrap";
import { benefits } from "../../middleware/new-customer-account/Benifits";


function Benifits() {
  return (
    <>
      <section className="install_benifits pt-5 pb-5">
        <div className="benifits_wraper">
          <div className="container">
            <div className="benifits_content">
              <div className="image_with_text_new_heading pb-4">
                <h2 className="font-alverata-normal text-center mb-4"><span className="gradient-text">Benefits</span> of installation</h2>
              </div>
              <Row>
                {benefits.map((benefit, index) => (
                  <Col className="text-center col-md-4 col-sm-6" lg={3} key={benefit.title}>
                    <div className="benifit_col">
                      {/* <span className="benifit_icon">{benefit.icon}</span> */}
                      <div className="mb-3">
                        <img src={benefit.icon} alt={benefit.alt.toLowerCase()} />
                      </div>
                      <h3 className="font-alverata-normal">{benefit.title}</h3>
                      <p className="benifit_para">{benefit.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benifits;
