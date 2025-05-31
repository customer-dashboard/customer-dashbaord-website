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
              <Row>
                {benefits.map((benefit, index) => (
                  <Col lg={3} key={benefit.title}>
                    <span>{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
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
