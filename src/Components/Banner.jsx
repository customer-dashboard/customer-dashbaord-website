import React from "react";
import { Button, Col, Container, Row ,Image} from "react-bootstrap";
import '../Assets/css/Banner.css';
import shopify_logo from '../Assets/Images/shopify_logo.png';
import PlayerComponent from "./PlayerComponent";
function Banner() {
    return (
        <>

            <section className="section_1 sec">
                <div className="banner_background">
                    <Container>
                        <Row className="align-items-center mt-4">
                            <Col lg={5} className="banner_left_section">
                                <div className="main_heading"> 
                                <h1>UPGRADE CUSTOMERS ACCOUNTS FOR MORE REVENUE & RETENTION</h1>
                                <p>By improving customers accounts, you can top into the value of your existing customers and encourage them to return again and again</p>
                                </div>
                                <div className="main_section_btn">
                                    <Row>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="shopify">
                                            <Button href="#" className="d-flex s_btn btns justify-content-evenly">
                                                <Image src={shopify_logo}></Image>
                                                <div className="btn_details">
                                                    <span className="span_1 banner-span">INSTALL FROM THE </span>
                                                    <span className="span_2 banner-span">Shopify App Store</span>
                                                </div>
                                            </Button>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="forever">
                                            <Button href="#" className="btns f_btn">
                                                <div>
                                                    <span className="span_3 banner-span">Free Forever</span>
                                                    <span className="span_4 banner-span">for new shopify merchants</span>
                                                </div>
                                            </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="shopify_video">
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