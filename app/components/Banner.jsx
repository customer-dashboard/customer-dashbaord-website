import { Button, Col, Container, Image, Row} from "react-bootstrap";
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png';
import { VideDemoModal } from "./Modals/VideDemoModal";
import { useState } from "react";
// import BannerHeroImage from '../assets/images/NewDataImages/OWINKS15445454 (1).png';


function Banner(props) {
    const { showComponents } = props;
    
    const startIcon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 42 40" fill="none">
    <path d="M20.0489 0.927052C20.3483 0.00574108 21.6517 0.0057401 21.9511 0.927051L26.1638 13.8926C26.2977 14.3046 26.6817 14.5836 27.1149 14.5836H40.7477C41.7164 14.5836 42.1192 15.8232 41.3355 16.3926L30.3063 24.4058C29.9558 24.6604 29.8091 25.1118 29.943 25.5238L34.1558 38.4894C34.4551 39.4107 33.4007 40.1768 32.6169 39.6074L21.5878 31.5942C21.2373 31.3396 20.7627 31.3396 20.4122 31.5942L9.38305 39.6074C8.59934 40.1768 7.54486 39.4107 7.84421 38.4894L12.057 25.5238C12.1908 25.1118 12.0442 24.6604 11.6937 24.4058L0.664543 16.3926C-0.11917 15.8232 0.283604 14.5836 1.25233 14.5836H14.8851C15.3183 14.5836 15.7023 14.3046 15.8362 13.8926L20.0489 0.927052Z" fill="#eb4503"/>
    </svg>
    const shopifyIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-18 0 292 292" preserveAspectRatio="xMidYMid"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/><path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/><path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/></svg>
    return (
        <>
            <section className="section_1 sec">
                <div className="banner_background">
                    <Container>
                        <Row className="align-items-center mt-4">
                            <Col lg={5} className="banner_left_section">
                                <div className="main_heading"> 
                                <h1 className="mb-3">Improve Your Shopify Store with the Top <span>Customer Accounts App</span></h1>
                                <div className="mb-3 built-for-shopify-button">
                                    <span className="built-button-wraper">
                                        <span className="built-shopify-logo">
                                        <svg class="tw-h-[0.75em] " viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13 0-1 5-4 9 8-9.5L13 0ZM3 0l1 5 4 9-8-9.5L3 0Z" fill="#0D79A7"></path><path d="m3 0 1 5 4 9 4-9 1-5H3Z" fill="#49A3C9"></path><path d="M8 14 4 5l-4-.5L8 14ZM8 14l4-9 4-.5L8 14Z" fill="#07425B"></path><path d="M8 5.5 4 5l4 9 4-9-4 .5Z" fill="#0D79A7"></path><path d="m4 5 4-5 4 5-4.001.5L4 5Z" fill="#95D5F0"></path><path d="M4 5 3 0h5L4 5ZM12 5l1-5H8l4 5Z" fill="#49A3C9"></path><path d="M4 5 3 0 0 4.5 4 5ZM12 5l1-5 3 4.5-4 .5Z" fill="#0D79A7"></path></svg>
                                        </span>
                                        <span className="built-shopify-text">Built for Shopify</span>
                                    </span>
                                </div>
                                <p className="mb-4">By improving customers accounts, you can top into the value of your existing customers and encourage them to return again and again</p>
                                </div>
                                <div className="app__review--section">
                                  <span className="start-icons">{startIcon}{startIcon}{startIcon}{startIcon}{startIcon}</span> 
                                   <span className="shopify_icon">70 + Reviews from {shopifyIcon}</span>
                                </div>
                                <div className="main_section_btn">
                                    <Row>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="shopify transition-duretion">
                                            <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black">
                                                <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black"></Image>
                                              {/* <LazyLoadedImage src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" /> */}
                                            </Button>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 ">
                                        <div className='transition-duretion banner_second_btn'>
                                            {/* <a className="btn header_btn  btn btn-primary">
                                                View Demo
                                            </a> */}
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
                                        </Col>
                                    </Row>
                                </div>
                            
                            </Col>
                            <Col lg={7}>
                                <div className="shopify_video banner_video hero-banner-image">
                                    <Image src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/Customer%20Dashboard%20Pro%20Images/main%20banner%20image_01%20(1).png" alt="Shopify new customer account hero banner image" title="Shopify new customer account"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

        </>
    );
}

export default Banner;