import { Col, Container, Image, Row } from 'react-bootstrap';
import One_Star_Image from '../assets/images/One_Star_Image.png';
import Beard_Man from '../assets/images/Beard_man.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';
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
                                        <LazyLoadedImage src={Beard_Man} alt="facility image" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="Beard_man_image">
                                    <LazyLoadedImage src={Beard_Man} alt="facility image" />
                                    </div>
                                    <div className="why_install why-install-data-container">
                                        <h2 className='section_heading'>WHY <span>INSTALL?</span></h2>
                                        <ul>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Customer Dashboard Pro offers a user-friendly interface, making it easy for customers to navigate and access their account information effortlessly.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Choose your language effortlessly! With Customer Dashboard Pro, customers can quickly switch languages for a more user-friendly experience.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Shop with confidence! Customer Dashboard Pro ensures your information is secure for worry-free.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Stay informed about your orders with effortless tracking for a smooth shopping experience.</span>
                                            </li>
                                            <li>
                                                <span><Image src={One_Star_Image}></Image></span>
                                                <span>Customer Dashboard Pro supports third-party integrations, allowing you to amplify your customer journey with features like rewards and wishlists.</span>
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