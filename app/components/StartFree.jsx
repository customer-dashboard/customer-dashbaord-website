import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function StartFree() {
  return (
    <>
    
        <section className="free_trial_section">
            <div className="free_trial">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="freen_start_and_free_plans">
                                <h2>READY? TRY IT - FREE! </h2>
                                <p>Get started with Shopify Customer Dashboard Pro App</p>
                                <div className="freen_btns">
                                <Row>
                                    <Col lg={6} className="text-align-end col-md-6 col-sm-6 col-x-sm-6">
                                        <a href='https://apps.shopify.com/customer-dashboard-pro' target='_blank'>
                                        <Button className="Start_btn freen_section_btn">Start For Free</Button>
                                        </a>
                                    </Col>
                                    <Col lg={6} className="text-align-left col-md-6 col-sm-6 col-x-sm-6">
                                        <Button href='/pricing' target='_blank' className="price_btn freen_section_btn">See Pricing Plans</Button>
                                    </Col>
                                </Row>
                                </div>
                                <p className="disclamer">Don’t have a Shopify store yet? <a href="https://shopify.pxf.io/mandasa" target='_blank'>Get one now</a></p>
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