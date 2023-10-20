import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import {Image,Col,Row} from 'react-bootstrap';
import Theme_Setting_Image from '../Assets/Images/FAQ___Images/Theme_setting_Image.png';
import App_Imbed_Image from '../Assets/Images/FAQ___Images/App_Embed_Image.png';

export function FaqItem_1() {
  return (
    <>
    
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
    

    </>
  )
}

