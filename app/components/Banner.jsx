import { Button, Col, Container, Image, Row} from "react-bootstrap";
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png';
import BannerHeroImage from '../assets/images/NewDataImages/OWINKS15445454 (1).png';


function Banner() {
    return (
        <>

            <section className="section_1 sec">
                <div className="banner_background">
                    <Container>
                        <Row className="align-items-center mt-4">
                            <Col lg={5} className="banner_left_section">
                                <div className="main_heading"> 
                                <h1 className="mb-3">Improve Your Shopify Store with the Top Customer Accounts App</h1>
                                <div className="mb-3 built-for-shopify-button">
                                    <span className="built-button-wraper">
                                        <span className="built-shopify-logo">
                                        <svg class="tw-h-[0.75em] " viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13 0-1 5-4 9 8-9.5L13 0ZM3 0l1 5 4 9-8-9.5L3 0Z" fill="#0D79A7"></path><path d="m3 0 1 5 4 9 4-9 1-5H3Z" fill="#49A3C9"></path><path d="M8 14 4 5l-4-.5L8 14ZM8 14l4-9 4-.5L8 14Z" fill="#07425B"></path><path d="M8 5.5 4 5l4 9 4-9-4 .5Z" fill="#0D79A7"></path><path d="m4 5 4-5 4 5-4.001.5L4 5Z" fill="#95D5F0"></path><path d="M4 5 3 0h5L4 5ZM12 5l1-5H8l4 5Z" fill="#49A3C9"></path><path d="M4 5 3 0 0 4.5 4 5ZM12 5l1-5 3 4.5-4 .5Z" fill="#0D79A7"></path></svg>
                                        </span>
                                        <span className="built-shopify-text">Built for Shopify</span>
                                    </span>
                                </div>
                                <p className="mb-5">By improving customers accounts, you can top into the value of your existing customers and encourage them to return again and again</p>
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
                                            <div className="forever transition-duretion">
                                            <a href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="noreferrer">
                                            <Button className=" f_btn btns">
                                                <div>
                                                    <span className="span_3 banner-span">Free Forever</span>
                                                    <span className="span_4 banner-span">for new shopify merchants</span>
                                                </div>
                                            </Button>
                                            </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="shopify_video banner_video hero-banner-image">
                                    <Image src={BannerHeroImage} alt="Hero Banner Image"/>
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