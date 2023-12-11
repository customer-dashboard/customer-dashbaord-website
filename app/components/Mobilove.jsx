import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Mobile_Version_Image from '../assets/images/Mobilove_Section_Images/Mobilove.png';
import mobilove_logo from '../assets/images/Mobilove_logo.png';
function Mobilove() {
    return (
        <>

            <section className="mobilove_section sec sec-3">
                <div className="Mobilove">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="mobilove_main_heading">
                                    <h2><span>THE FASTEST-GROWING</span> SHOPIFY BRANDS USE CUSTOMER DASHBOARD PRO</h2>
                                </div>
                            </Col>
                        </Row>
                        <div className="mobilove_main_content">
                        <Row className="align-items-center">
                            
                                <Col lg={6}>
                                    <Row className="align-items-center ">
                                            <Col lg={6} className="col-md-6 col-sm-6 col-x-sm-6">
                                                <div className="progress_content">
                                                    <div className="progeress_increase_bar">
                                                        <h3>70%</h3>
                                                        <p>Increase in orders using store credits</p>
                                                    </div>
                                                    <div className="progeress_increase_bar">
                                                        <h3>80%</h3>
                                                        <p>Make account page fast and stable</p>
                                                    </div>
                                                    <div className="progeress_increase_bar">
                                                        <h3>85%</h3>
                                                        <p>Increase visitors to website</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} className="col-md-6 col-sm-6 col-x-sm-6">
                                                <div className="mibile_virson">
                                                    <Image  src={Mobile_Version_Image}></Image>
                                                </div>
                                            </Col>
                                    </Row>
                                </Col>
                                <Col lg={6}>
                                    <div className="mobilove_side_content">
                                        <Image src={mobilove_logo}></Image>
                                        <p className="mobilove_logo_para mt-3">Mobilove Boosts <span>Loyalty and Repeat Purchases</span> With the customer dashboard pro app</p>
                                        <p className="mobilove_logo_para-2 mt-2">As a result, customers can reap the benefits of increased loyalty and an improved shopping experience.</p>
                                        {/* <a href="#" className="d-block mt-5 ready_case_link">Read case study</a> */}
                                    </div>
                                </Col>
                        </Row>
                        </div>
                    </Container>
                </div>
            </section>

        </>
    );
}

export default Mobilove;