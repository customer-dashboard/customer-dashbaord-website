import React from 'react'
import { Container } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';

import { FaqItem_1 } from './FaqItem_1';
import { FaqItem_2 } from './FaqItem_2';
import { FaqItem_3 } from './FaqItem_3';
import { FaqItem4 } from './FaqItem_4';
import { FaqItem_5 } from './FaqItem_5';
import { FaqItem_6 } from './FaqItem_6';
import { FaqItem_7 } from './FaqItem_7';

function Faq() {
    return (
        <section className="faq-section">
            <div className="faq">
                <Container>
                    <div className="faq_Container">
                        <div className="faq_main_heading">
                            <h2>FREQUENTLY ASKED QUESTIONS <span>(FAQ)</span></h2>
                        </div>
                        <Accordion defaultActiveKey="8">
                            <FaqItem_1/>
                            <FaqItem_2/>
                            <FaqItem_3/>
                            <FaqItem4/>
                            <FaqItem_5/>
                            <FaqItem_6/>
                            <FaqItem_7/>
                        </Accordion>
                        {/* <Row>
                            <Col lg={12}>
                            <a href="#">    
                            <div className="view_all">
                                    <Button className='btn view_all_btn'>View All</Button>
                                </div>
                            </a>
                            </Col>
                        </Row> */}
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Faq;