import React from 'react'
import { Col, Row, Image, Container, Button } from 'react-bootstrap'
import '../Assets/css/Faq.css';
import Theme_Setting_Image from '../Assets/Images/FAQ___Images/Theme_setting_Image.png';
import App_Imbed_Image from '../Assets/Images/FAQ___Images/App_Embed_Image.png';

import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <section className="faq-section">
            <div className="faq">
                <Container>
                    <div className="faq_Container">
                        <div className="faq_main_heading">
                            <h2>FREQUENTLY ASKED QUESTIONS <span>(FAQ)</span></h2>
                        </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className="mb-3 mt-3">
                            <Accordion.Header className="tab_headings"> How to Install Customer Dashboard Pro</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col lg={12}>

                                        <div className="tab_container">
                                            <div className="tab_para mb-4">
                                                Installation of customer dashboard pro is very easy . <a href="#">Click HERE</a> to install the customer dashboard pro app.
                                            </div>
                                            <Row>
                                                <Col lg={6} className="col-md-6 col-sm-6 col-x-sm-6">
                                                    <div className="theme_setting_image mb-4">
                                                        <span>1.Simply activate customer dashboard pro from dashboard.</span>
                                                        <Image src={Theme_Setting_Image}></Image>
                                                    </div>
                                                </Col>
                                                <Col lg={6} className="col-md-6 col-sm-6 col-x-sm-6">
                                                    <div className="app_embed_image mb-4">
                                                        <span>2. Ensure customer dashboard pro is toggled on from app embeds.</span>
                                                        <Image src={App_Imbed_Image}></Image>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>

                                    </Col>
                                </Row>

                            </Accordion.Body>
                        </Accordion.Item >
                        <Accordion.Item eventKey="1" className="mb-3 mt-3">
                            <Accordion.Header>What to do if the Customer Dashboard Pro App is not working on your account page.</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="mb-3 mt-3">
                            <Accordion.Header>How to add a Custom Link to your Menu ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="mb-3 mt-3">
                            <Accordion.Header>How to add a Shopify Page to your Menu ?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row>
                        <Col lg={12}>
                            <div className="view_all">
                            <Button className='btn view_all_btn'>View All</Button>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Faq;