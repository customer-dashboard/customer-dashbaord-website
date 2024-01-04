import { Button, Col, Container, Row} from "react-bootstrap";
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png';
import PlayerComponent from "./PlayerComponent";
import LazyLoadedImage from "./lazyLoadImage/LazyLoadImage";


function Banner() {
    return (
        <>

            <section className="section_1 sec">
                <div className="banner_background">
                    <Container>
                        <Row className="align-items-center mt-4">
                            <Col lg={5} className="banner_left_section">
                                <div className="main_heading"> 
                                <h1>Improve Your Shopify Store with the Top Customer Accounts App</h1>
                                <p>By improving customers accounts, you can top into the value of your existing customers and encourage them to return again and again</p>
                                </div>
                                <div className="main_section_btn">
                                    <Row>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="shopify">
                                            <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black">
                                                {/* <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black"></Image> */}
                                              <LazyLoadedImage src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" />
                                            </Button>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 ">
                                            <div className="forever">
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
                                <div className="shopify_video banner_video">
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

export default Banner;