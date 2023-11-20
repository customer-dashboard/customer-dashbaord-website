import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Button, Col, Image, Row } from 'react-bootstrap';
import shopifyOfficialLogoWhite from '../Assets/Images/Shopify-App-Store-Badge-Final-White.png';
import startImage from '../Assets/Images/Star_image.png';
import AccountPageImage from '../Assets/Images/Mobilove_Section_Images/Mobile_versin_Image.png';
import RevampPanelImage from '../Assets/Images/NewDataImages/Revamp panel.png';
import customeFOrmField from '../Assets/Images/Medium_From.png';
import '../Assets/css/CustomerAccountPagemanu.css';
import Carousel from './Carousel';

function CustomerAccountPageManu() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Helmet>
                <title>Shopify Customer Account Page | Customer Dashboard Pro</title>
                <meta name="description" content="Enhance the shopping experience you offer and capture more shopper data with Amazon-like Customer Account Pages on your Shopify store." />
                <meta property="og:title" content="Customized Shopify Customer Account Page | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Customer Account Page | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/customer-account"></meta>
                <meta property="og:description" content="Enhance the shopping experience you offer and capture more shopper data with Amazon and Flipcart-like Customer Account Pages on your Shopify store." />
            </Helmet>

            <section className='customer-account-page-manu'>
                <div className='container'>
                    <div className='page-content customer-account-page-manu-content'>
                        <div className="customer-account-main-content">
                            <Row className='align-items-center'>
                                <Col lg={6} className='acntpage-col-fst col-md-6'>
                                    <div className="acntpage-col-fst-cntnt">
                                        <h1 className='acntpagmnu-hero-heading main-page-heading'>
                                            Unlock the Full Potential of Shopify Customer Accounts
                                        </h1>
                                        <h3 className='mt-4'>Create a Seamless Shopping Journey</h3>
                                        <p className='mt-4'>Guide customers effortlessly through their account pages for a frictionless experience.</p>
                                        <p className='mt-3'>Learn how to turn account interactions into opportunities for growth</p>
                                        <div className='shopify-logos-for-customer shopify-logos-for-customer-with-rating mt-4 acntpage-ofical-witlgo-btn shpfy-wit-lg'>
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' rel='norefferer'>
                                                <Image src={shopifyOfficialLogoWhite} alt='shopify-official-white-logo'></Image>
                                            </Button>
                                            <div className='shpdashboard-pro-rating-system'>
                                                <Image src={startImage} alt='star-image'></Image>
                                                <span>21 + Reviews</span>
                                            </div>
                                        </div>
                                        <div className="shpfacntpagbtns mt-5">
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' className='shpfy-trial-demo-btn acntpagetrlbtn'>Start Free Trial</Button>
                                            <Button href='https://customer-dashboard.myshopify.com/account/login' target='_blank' className='shpfy-trial-demo-btn acntpagedmobtn'>Our Demo Store</Button>
                                        </div>
                                    </div>
                                </Col>
                                {/* col- first end here */}
                                <Col lg={6} className='acntpage-col-scnd col-md-6 after-md-margin-top'>
                                    <div className="acntpage-col-scnd-cntnt">
                                        <Image src={AccountPageImage} alt='account-page-image'></Image>
                                    </div>
                                </Col>
                                {/* col-second end here */}
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
            {/* section first ended here */}

            {
                <Carousel />
            }
            {/* carausel section ended here */}
            <section className='account-page-section-3 mt-5'>
                <div className='acnt-pg-sctn-3-container'>
                    <div className='container'>
                        <div className='acnt-pg-inner-feature-container'>
                            <Row className='align-items-center Drive-sales-group mb-5 mt-3 py-md-5'>
                                <Col lg={6} className='col-md-6'>
                                    <div className="acnt-pg-inner-feature-col-first">
                                        <h2>Drive sales to the next level with Customer Dashboard Pro</h2>
                                        <p className='mt-3'>Leverage the potential of Customer Dashboard Pro in your Website to gain insights into user preferences, providing a deeper understanding of their choices.</p>
                                        <p>Explore the wealth of user insights available through Customer Dashboard Pro by examining saved wishlist items, recently viewed products, and order history. Gain a comprehensive understanding of user preferences with these key indicators.</p>
                                        <p>Harness the shopper's data from Customer Dashboard Pro to fuel retargeting campaigns on social media and craft personalized product recommendations. Implement strategic upsell and cross-sell campaigns to elevate your average order value, maximizing the impact of your marketing efforts.</p>
                                    </div>
                                </Col>
                                {/* col-6 first ended */}
                                <Col lg={6} className='col-md-6 after-md-margin-top'>
                                    <div className="acnt-pg-inner-feature-col-second">
                                        <Image src={RevampPanelImage} alt='feature-image'></Image>
                                    </div>
                                </Col>
                                {/* col-6 second ended */}
                            </Row>
                            {/* first row ended here */}
                            <Row className='align-items-center custom-fields-description mt-5 mb-3'>
                                <Col lg={6} className='col-md-6  mob-order'>
                                    <div className="custome-field-data-description-col-fst">
                                        <Image src={customeFOrmField} alt='custome-field'></Image>
                                    </div>
                                </Col>
                                {/* col-6 3rd ended here */}
                                <Col lg={6} className='col-md-6 after-md-margin-top'>
                                    <h2>Save customer data as per your requirement with custom fields</h2>
                                    <p className='mt-4'>Gather crucial data efficiently using custom fields within the Customer Dashboard Pro. Capture a diverse range of information including numerical data, text, alphanumeric entries, dates, times, and document uploads. This versatile data collection approach ensures a comprehensive understanding of your customers' profiles.</p>
                                    <p className='mt-4'>Enhance customer interactions by sending thoughtful personal notes, customizing orders to cater to individual preferences, and efficiently utilizing necessary data for legal compliance or streamlined order processing.</p>
                                    <p className='mt-4'> With Customer Dashboard Pro, create a seamless and personalized experience for your customers while ensuring adherence to legal requirements.</p>
                                </Col>
                                {/* col-6 4rth ended here */}
                            </Row>
                            {/* second row ended */}
                        </div>
                    </div>
                </div>
            </section>
            {/* section 3 ended here */}
        </>
    )
}

export default CustomerAccountPageManu