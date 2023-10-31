import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../Assets/css/Facility.css';
import Beard_Man from '../Assets/Images/Beard_man.png';
import One_Star_Image from '../Assets/Images/One_Star_Image.png';
function Facility() {
    return (
        <>

            <section className="facility">
                <div className="facility_group">
                    <Container>
                        <div className="show_facility_content">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className="Beard_man_image_1">
                                        <Image src={Beard_Man}></Image>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="Beard_man_image">
                                    <Image src={Beard_Man}></Image>
                                    </div>
                                    <div className="why_install">
                                        <h2 className='section_heading'>WHY <span>INSTALL?</span></h2>
                                        <ul>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>The customer account page is not given as much attention by the biggest store as other pages.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Therefore, it remains boring and uninteresting.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>What is the reason for this?</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Let your customers interact with you in a more sophisticated way.</span>
                                            </li>
                                            <li>
                                            <span><Image src={One_Star_Image}></Image></span>
                                            <span>With Customer Dashboard Pro Customer Accounts, <span className="last-li-child">you can do that easily.</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>

        </>
    )
}

export default Facility