import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PlayerComponent from "./PlayerComponent";
import '../Assets/css/CustomerAccountPage.css';

function CustomerAccountPage(){
    return(
        <>
        
        <section className="section_7">
            <div className="customer_account_page">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="heading">
                                <h2>Built for customizing the look and feel for <span>shopify stores account page</span></h2>
                            </div>
                            <div className="account-page-video">
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


export default CustomerAccountPage;