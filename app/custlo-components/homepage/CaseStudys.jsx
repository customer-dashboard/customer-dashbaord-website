import React from "react";
import { Col, Row } from "react-bootstrap";
import { caseStudyHomePageData } from "~/middleware/new-customer-account/Benifits";

function CaseStudys() {
  return (
    <>
      <section className="case_study_home_division pt-5 pb-5">
        <div className="case_study_wraper">
          <div className="container">
            <div className="case-study_content">
              <div className="image_with_text_new_heading pb-4">
                <h2 className="font-alverata-normal text-center mb-4">
                  See how{" "}
                  <span className="gradient-text"> brands use Custlo</span> to
                  grow
                </h2>
              </div>

              <div className="casu-study_items">
                <Row className="justify-content-center">
                  {caseStudyHomePageData.map((item, index) => (
                    <Col
                      className="col-md-6"
                      lg={6}
                      key={index}
                    >
                     <div className="single_case_study_content">
                        <img width="100%" src={item.image} alt={item.alt} />
                        <div className="study_info__">
                            <h3 className="font-alverata-normal">{item.title}</h3>
                            <a href={item.url} className="font-alverata-normal" target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                     </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudys;
