import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import PlayerComponent from "./PlayerComponent";
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png';
import { DiamondIcon } from "~/middleware/new-customer-account/ImageWithText";
import parse from 'html-react-parser';

function CustomerAccountPage(){
    return(
        <>
        
        <section className="section_7">
            <div className="customer_account_page">
                <Container>
                    <Row>
                        {/* <Col md={5}>
                            <div className="image_with_text_new_heading">
                               <h2  className="fw-600 text-start mb-4">Built for customizing the look and feel for <span className="new_color">Shopify Customer Account page</span></h2>
                               <div className="feature_item_box mt-3" >
                                 <div className="d-flex column-gap-3">
                                    <div className="feature_icon__">
                                        {DiamondIcon}
                                    </div>
                                    <div className="feature_description_  mb-2">
                                       <p className="text-start"><strong>Complete Design Control:</strong> Customize the look and feel of your Shopify account page effortlessly.</p>
                                    </div>
                                  </div>
                                  <div className="d-flex column-gap-3">
                                    <div className="feature_icon__">
                                        {DiamondIcon}
                                    </div>
                                    <div className="feature_description_  mb-2 text-start">
                                       <p className="text-start"><strong>Enhanced User Experience:</strong> Transform functionality to create a seamless and engaging account page.</p>
                                    </div>
                                  </div>
                                </div>
                               <div className="main_section_btn d-none d-md-block">
                                    <Row>
                                        <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="shopify transition-duretion">
                                            <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black">
                                                <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black"></Image>
                                            </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col> */}
                          <Col lg={5} className="banner_left_new">
              <div className='image_with_text_new_heading mb-3'>
                <h2 className='font-alverata-normal'>
                   <span className='gradient-text'> Customize </span> your customer <span className='gradient-text'> account page </span>
                </h2>
              </div>
              <div className="image_with_text_features">
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Complete Design Control:</strong> Customize the look and feel of your Shopify account page effortlessly.")}
                    </div>
                  </div>
                </div>
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Enhanced User Experience:</strong> Transform functionality to create a seamless and engaging account page.")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-btn">
                <a className='universal-btn featurs-img-btn' href="http://" target="_blank" rel="noopener noreferrer">
                 <Image width="100%" src={shopifyOfficialLogoBlack} title="Find us on the Shopify app store" alt="Shopify app store logo" />
                </a>
              </div>
            </Col>
                        <Col md={7}>
                            <div className="account-page-video">
                                <PlayerComponent />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        
        </>
    );
}


export default CustomerAccountPage;