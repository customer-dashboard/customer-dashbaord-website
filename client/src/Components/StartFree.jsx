import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/StartFree.css';

function StartFree() {
  return (
    <>
    
        <section className="free_trial_section">
            <div className="free_trial">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="freen_start_and_free_plans">
                                <h2>READY? <span>TRY IT - FREE!</span></h2>
                                <p>Get started building your pages now. No Credit cards required.</p>
                                <div className="freen_btns">
                                <Row>
                                    <Col lg={6} className="text-align-end col-md-6 col-sm-6 col-x-sm-6">
                                        <a href='https://apps.shopify.com/customer-dashboard-pro' target='_blank'>
                                        <Button className="Start_btn freen_section_btn">Start For Free</Button>
                                        </a>
                                    </Col>
                                    <Col lg={6} className="text-align-left col-md-6 col-sm-6 col-x-sm-6">
                                        <Button href='https://customerdashboard.pro/pricing' target='_blank' className="price_btn freen_section_btn">See Pricing Plans</Button>
                                    </Col>
                                </Row>
                                </div>
                                <p className="disclamer">Don’t have a Shopify store yet? <a href="https://www.shopify.com/partners" target='_blank'>Get one now</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    
    </>
  )
}

export default StartFree;