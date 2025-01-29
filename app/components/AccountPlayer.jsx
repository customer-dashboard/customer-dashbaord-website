import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import PlayerComponent from "./PlayerComponent";
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png';
import { DiamondIcon } from "~/middleware/new-customer-account/ImageWithText";

function CustomerAccountPage(){
    return(
        <>
        
        <section className="section_7">
            <div className="customer_account_page">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className="image_with_text_new_heading">
                               <h2  className="fw-600 text-start mb-4">Built for customizing the look and feel for <span>Shopify Customer Account page</span></h2>
                               {/* <p className="mb-5  text-start d-none d-md-block">Transform the Look, Feel, and Functionality of Your Shopify Store's Account Page with Comprehensive and Advanced Customization Capabilities Designed to Elevate User Experience</p> */}
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
                                              {/* <LazyLoadedImage src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" /> */}
                                            </Button>
                                            </div>
                                        </Col>
                                        {/* <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 ">
                                        <div className='transition-duretion banner_second_btn'>
                                            <a  
                                                target={showComponents ? '_blank' : ''}
                                                href={  showComponents == 'New Customer Account' ? "https://shopify.com/73535684832/account"
                                                         : showComponents == 'Classic Customer Account'
                                                         ? "https://customer-dashboard.myshopify.com"
                                                         : "#choose-customer-account-version"
                                                      }
                                                className="btn header_btn btn btn-primary"
                                                >
                                                View Demo
                                                </a>
                                        </div>
                                        </Col> */}
                                    </Row>
                                </div>
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