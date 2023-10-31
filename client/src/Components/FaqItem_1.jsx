import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import {Image,Col,Row} from 'react-bootstrap';
import Theme_Setting_Image from '../Assets/Images/FAQ___Images/Theme_setting_Image.png';
import ThirdStep from '../Assets/Images/FAQ___Images/third_step-768x368.png';
import SecondStep from '../Assets/Images/FAQ___Images/second_step-768x341.png';
import FirstStep from '../Assets/Images/FAQ___Images/first_step-768x341.png';
export function FaqItem_1() {
  return (
    <>
    
    <Accordion.Item eventKey="0" className="mb-3 mt-3">
                                <Accordion.Header className="tab_headings"> How to Install Customer Dashboard Pro</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={12}>

                                            <div className="tab_container accordian-body-content">
                                                <div className="tab_para mb-4">
                                                    Installation of customer dashboard pro is very easy . <a href="#">Click HERE</a> to install the customer dashboard pro app.
                                                </div>
                                                <Row>
                                                    <Col lg={12} className="col-md-12 col-sm-12 col--sm-6">
                                                        <div className="theme_setting_image mb-4">
                                                            <p>Click the installation button, then select a theme. After that, click the <strong>"Manage Installation"</strong> button to enable the Customer Dashboard Pro extension, and then click the <strong>"Save"</strong> button to save your settings.</p>
                                                            <Image src={FirstStep}></Image>
                                                            <div className="app_embed_image mb-4">
                                                            <Image src={SecondStep}></Image>
                                                            </div>
                                                            <div>
                                                             <Image src={ThirdStep}></Image>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} className="col-md-6 col-sm-6 col-x-sm-6">
                                                        
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

