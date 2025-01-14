import React from "react";
import { ShopifyPlusCaseStudies } from "./ShopifyPlus";
import { Button, Col, Image, Row } from "react-bootstrap";

function ShopifyPlusIndex() {
  return (
    <>
      <section className="mt-5" id="shopify-plus-success-stories">
      <div className="container">
        <div className="case-study-grid-wraper mb-5 pt-5">
          <div className="case-study-grid-container">
            <div className="row justify-content-center">
              <div className="col-lg-11">
              <Row className="row-gap-4">
            {ShopifyPlusCaseStudies.map((item, index) => {
              return (
                <>
                   <Col lg={6}>
                     <div className="sigle-case-study-item-wraper">
                        <div className="sigle-case-study-item-content">
                          <div className="case-study-main-image-wraper">
                            <Image className="w-100 brand-main-img" src={item.image} alt={item.alt} title={item.alt} />
                            <div className="case-study-brand-roi-wraper">
                              <div className="_brand-roi text-center mb-md-2 mb-3">
                                <div className="_brand-roi_heading">Customer Loyalty</div>
                                <div className="_brand-roi_data app-color"><span>{item.ROI}</span></div>
                              </div>
                              <div className="_brand-revenue text-center mt-md-2  mt-3">
                                <div className="_brand-roi_heading">Repeat Purchases</div>
                                <div className="_brand-roi_data app-color"><span>{item.Revenue}</span></div>
                              </div>
                            </div>
                          </div>
                            <div className="case-study-brand">
                              <hr class="hr" />
                              <div className="row align-items-center justify-content-between">
                                <div className="col-sm-6">
                                  <a href={item.brandUrl} target="_blank" rel="noopener noreferrer">
                                    <div className="brand-logo">
                                      <Image
                                        className="w-100"
                                        src={item.brandLogo}
                                        alt={item.brandLogoAlt} title={item.brandLogoAlt} 
                                      />
                                     </div>
                                    </a>
                                </div>
                                <div className="col-sm-6 text-end">
                                 <Button className="case-study-read-more" variant="plain" href={item.url} >Read More</Button>
                                </div>
                              </div>
                              <hr class="hr" />
                            </div>
                            <div className="single-item-content">
                              <a href={item.url} className="text-decoration-none" rel="noopener noreferrer">
                                <h2 className="line-camp">{item.title}</h2>
                              </a>
                              <p className="line-camp">{item.description}</p>
                            </div>
                        </div>
                     </div>
                   </Col> 
                </>
              )
            })}
            </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default ShopifyPlusIndex;

// <h3>{item.title}</h3>
// <p>{item.description}</p>
// <Image src={item.image} alt={item.alt} title={item.alt} />
