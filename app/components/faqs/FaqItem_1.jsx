import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import {Image,Col,Row} from 'react-bootstrap';
export function FaqItem_1() {
  return (
    <>
    
    <Accordion.Item eventKey="0" className="mb-3 mt-3">
                                <Accordion.Header className="tab_headings">1. How to Install Customer Dashboard Pro</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col lg={12}>

                                            <div className="tab_container accordian-body-content">
                                                <div className="tab_para mb-4">
                                                    Installation of customer dashboard pro is very easy . <a href="https://apps.shopify.com/customer-dashboard-pro" target='_blank'>Click HERE</a> to install the customer dashboard pro app.
                                                </div>
                                                <Row>
                                                    <Col lg={12} className="col-md-12 col-sm-12 col--sm-6">
                                                        <div className="theme_setting_image mb-4">
                                                            <p>A. First of all, select the theme on your store. App default is set to live theme</p>
                                                            <Image src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/installation_1.gif"></Image>
                                                            <div className="app_embed_image mb-4 mt-4">
                                                            <p>B. Then after selecting theme click on <strong>Manage Installation </strong> which will redirect to theme app embed</p>
                                                            <Image src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/installation_2.gif"></Image>
                                                            </div>
                                                            <div className='mb-4 mt-4'>
                                                            <p>C. After going to Embed App, turn on the <strong>Customer Dashboard Pro</strong> extension.</p>
                                                             <Image src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/installation_step_3.gif"></Image>
                                                            </div>
                                                            <div className='mb-4 mt-4'>
                                                            <p>D. Click <strong>Save</strong> and you're done!</p>
                                                             <Image src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/installation_step_4.gif"></Image>
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

