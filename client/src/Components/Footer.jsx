import React from 'react';
import '../Assets/css/Footer.css';
import footer_customer_dashboard_logo from '../Assets/Images/Footer_Logo.png';
import { Image, Button } from 'react-bootstrap';
import normal_logo from '../Assets/Images/footer_shopify.png';
import shopify_logo_plus from '../Assets/Images/footer_shopify_plus.png';
import shopify_white_logo from '../Assets/Images/Shopify_white_footer_logo.png';
import newLogo from '../Assets/Images/Logo/newLogo.png'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Footer = () => <footer className="page-footer font-small blue pt-4 my-footer">
    <div className="container  text-md-left">
        <div className="row justify-content-between">
            <div className="col-md-3 col-lg-3 mt-md-0 mt-3 text-align-left">
                <h5 className="text-uppercase">
                <Link to="/" className="customer_logo_footer">
                        <Image src={newLogo}></Image>
                    </Link>
                </h5>
                <p className="logo_disclamer">This creates a convenient andversatile customer account page,
                    allowing customers to fully customize
                    their experience and merchants to
                    easily manage their store's look and feel.</p>
            </div>

            <div className="footer_accordian">
                <Accordion>
                    <Accordion.Item eventKey="0" className="mb-1 mt-1 footer_acccourdian_item">
                        <Accordion.Header className="header_background footer_accourdian_header">SUPPORT</Accordion.Header>
                        <Accordion.Body className="accordian_body">
                            <ul className="list-unstyled text-align-left">
                                <li> <Link to='/faq' className="text-reset">All Faqs</Link></li>
                                <li><Link to='/#' className="text-reset">Blog</Link></li>
                                <li><Link to='privacy-policy' className="text-reset">Privacy Policy</Link></li>
                                <li><Link to='contact-us' className="text-reset">Contact Us</Link></li>
                                <li><Link to='/#' className="text-reset">About Us</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
            <hr className="width-100 m-t"/>
                    <Accordion.Item eventKey="1" className="mb-1 mt-1 footer_acccourdian_item">
                        <Accordion.Header className="header_background footer_accourdian_header">WORK WITH US</Accordion.Header>
                        <Accordion.Body className="accordian_body">
                            <ul className="list-unstyled text-align-left">
                                <li><Link to='/#' className="text-reset">Integration</Link></li>
                                <li><Link to='/#' className="text-reset">Become a Partner</Link></li>
                                <li><Link to='/#' className="text-reset">Careers</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr className="width-100 m-t"/>
                </Accordion>
            </div>

            <div className="col-md-3 col-lg-2 mb-md-0 mb-3 text-align-left d-none-768">
                <h5 className="text-uppercase text-align-left font-weight-bold">WORK WITH US</h5>
                <ul className="list-unstyled text-align-left">
                       <li> <Link to='/faq' className="text-reset">All Faqs</Link></li>
                       <li><Link to='/#' className="text-reset">Blog</Link></li>
                       <li><Link to='privacy-policy' className="text-reset">Privacy Policy</Link></li>
                       <li><Link to='contact-us' className="text-reset">Contact Us</Link></li>
                       <li><Link to='/#' className="text-reset">About Us</Link></li>
                </ul>
                

            </div>
           
            <div className="col-md-3 col-lg-2 mb-md-0 mb-3 d-none-768">
                <h5 className="text-uppercase text-align-left font-weight-bold">WORK WITH US</h5>
                <ul className="list-unstyled text-align-left">
                        <li><Link to='/#' className="text-reset">Integration</Link></li>
                        <li><Link to='/#' className="text-reset">Become a Partner</Link></li>
                         <li><Link to='/#' className="text-reset">Careers</Link></li>
                </ul>
            </div>
            <div className="col-md-3 col-lg-2 mb-md-0 mb-3">
                <ul className="list-unstyled text-align-left d-m-flex">
                    <li><a href="#"><Image className="footer_dashboard_logo normal" src={normal_logo}></Image></a></li>
                    <li><a href="#"><Image className="footer_dashboard_logo plus mt-3" src={shopify_logo_plus}></Image></a></li>

                </ul>
                <div className="footer_white_shopify_logo mt-x-sm-2 mt-5">
                <a href='#'>
                <Button className="d-flex align-items-center justify-content-around white_logo_image f-btn">
                    <Image src={shopify_white_logo}></Image>
                    <div className="white_logo_spans">
                    <span className="s-1 d-block">INSTALL FROM THE </span>
                    <span className="s-2 d-block">Shopify App Store</span>
                    </div>
                </Button>
                </a>
            </div>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center py-4 mt-5 mt-sm-2 border-top copyright-policy">
            <p>© 2023 Customer Dashboard Pro, All Rights Reserved</p>
            <ul className="list-unstyled d-flex">


                <li className="ms-3"><a className="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M24.0819 2H8.30912C4.82469 2 2 4.75744 2 8.15891V23.5562C2 26.9577 4.82469 29.7151 8.30912 29.7151H24.0819C27.5664 29.7151 30.3911 26.9577 30.3911 23.5562V8.15891C30.3911 4.75744 27.5664 2 24.0819 2Z" stroke="#4F4F4F" stroke-width="3" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4409 11.6536H20.936H20.64C19.8633 11.6536 19.2337 12.2832 19.2337 13.0599V15.8734H23.4409L22.8247 20.0908H19.2337V29.0387H14.607V20.0908H10.7871V15.8734H14.5577L14.607 11.8701L14.5932 10.4353C14.5738 8.40925 16.2005 6.75108 18.2265 6.73162C18.2382 6.7315 18.25 6.73145 18.2617 6.73145H23.4409V11.6536Z" fill="#4F4F4F" />
                </svg></a></li>
                <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/customerdashboardpro/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M23.5562 2H8.15891C4.75744 2 2 4.75744 2 8.15891V23.5562C2 26.9577 4.75744 29.7151 8.15891 29.7151H23.5562C26.9577 29.7151 29.7151 26.9577 29.7151 23.5562V8.15891C29.7151 4.75744 26.9577 2 23.5562 2Z" stroke="#4F4F4F" stroke-width="3" stroke-linejoin="round" />
                    <path d="M15.8575 22.2794C19.4042 22.2794 22.2793 19.4043 22.2793 15.8576C22.2793 12.3109 19.4042 9.43579 15.8575 9.43579C12.3109 9.43579 9.43576 12.3109 9.43576 15.8576C9.43576 19.4043 12.3109 22.2794 15.8575 22.2794Z" stroke="#4F4F4F" stroke-width="3" stroke-linejoin="round" />
                    <path d="M24.3073 8.75982C25.0539 8.75982 25.6592 8.15455 25.6592 7.40786C25.6592 6.66118 25.0539 6.05591 24.3073 6.05591C23.5606 6.05591 22.9553 6.66118 22.9553 7.40786C22.9553 8.15455 23.5606 8.75982 24.3073 8.75982Z" fill="#4F4F4F" />
                </svg></a></li>
                <li className="ms-3"><a className="link-dark" href="https://in.linkedin.com/company/customer-dashboard-pro-shopify-app" target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M23.8413 2H8.44406C5.04259 2 2.28516 4.75744 2.28516 8.15891V23.5562C2.28516 26.9577 5.04259 29.7151 8.44406 29.7151H23.8413C27.2428 29.7151 30.0002 26.9577 30.0002 23.5562V8.15891C30.0002 4.75744 27.2428 2 23.8413 2Z" stroke="#4F4F4F" stroke-width="3" stroke-linejoin="round" />
                    <path d="M9.17295 10.4406C10.2188 10.4406 11.0666 9.59282 11.0666 8.54698C11.0666 7.50114 10.2188 6.65332 9.17295 6.65332C8.12712 6.65332 7.2793 7.50114 7.2793 8.54698C7.2793 9.59282 8.12712 10.4406 9.17295 10.4406Z" fill="#4F4F4F" />
                    <path d="M7.27939 13.281H11.0667V25.1164H7.27939V13.281Z" fill="#4F4F4F" />
                    <path d="M18.1674 25.1166H14.8535V18.4888C14.8535 15.6128 17.185 13.2812 20.0611 13.2812C22.9371 13.2812 25.2686 15.6128 25.2686 18.4888V25.1166H21.9547V18.4C21.9547 17.3542 21.1069 16.5064 20.0611 16.5064C19.0153 16.5064 18.1674 17.3542 18.1674 18.4V25.1166Z" fill="#4F4F4F" />
                </svg></a></li>
            </ul>
        </div>
    </div>
</footer>

export default Footer