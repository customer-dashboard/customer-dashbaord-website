import React from 'react'
import '../Assets/css/PricingPage.css';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'

const Pricing = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
    const PricingData = [
        {
            cutomerQuantity: "0-1500 Customers",
            pricePlan: "Free",
            improveAccountPage: 'Improved account page',
            multilingual: "Multilingual",
            quickReorder: "Quick reorder",
            manageProfile: "Manage profile",
            extraPages: "Extra pages (unlimited)",
            customeFields: "Custom fields",
            contactForm: "Contact form in order history",
            recentlyViewd: "Recently viewed",
            topOrderProducts: "Top ordered products",
            ViewLink: "https://apps.shopify.com/customer-dashboard-pro",
            ButtonName:"View"
        },
        {
            cutomerQuantity: "1501-5000 Customers",
            pricePlan: "$4",
            improveAccountPage: 'Improved account page',
            multilingual: "Multilingual",
            quickReorder: "Quick reorder",
            manageProfile: "Manage profile",
            extraPages: "Extra pages (unlimited)",
            customeFields: "Custom fields",
            contactForm: "Contact form in order history",
            recentlyViewd: "Recently viewed",
            topOrderProducts: "Top ordered products",
            ViewLink: "https://apps.shopify.com/customer-dashboard-pro",
            ButtonName:"View"
        },
        {
            cutomerQuantity: "5001-25000 Customers",
            pricePlan: "$10",
            improveAccountPage: 'Improved account page',
            multilingual: "Multilingual",
            quickReorder: "Quick reorder",
            manageProfile: "Manage profile",
            extraPages: "Extra pages (unlimited)",
            customeFields: "Custom fields",
            contactForm: "Contact form in order history",
            recentlyViewd: "Recently viewed",
            topOrderProducts: "Top ordered products",
            ViewLink: "https://apps.shopify.com/customer-dashboard-pro",
            ButtonName:"View"
        },
        {
            cutomerQuantity: "More than 25000 Customers",
            pricePlan: "$20",
            improveAccountPage: 'Improved account page',
            multilingual: "Multilingual",
            quickReorder: "Quick reorder",
            manageProfile: "Manage profile",
            extraPages: "Extra pages (unlimited)",
            customeFields: "Custom fields",
            contactForm: "Contact form in order history",
            recentlyViewd: "Recently viewed",
            topOrderProducts: "Top ordered products",
            ViewLink: "https://apps.shopify.com/customer-dashboard-pro",
            ButtonName:"View"
        }
    ]
    return (
        <>

            <section className='pricing-page-manu'>
                <div className='container'>
                    <div className='pricing-page-container'>
                        <div className='pricing-page-title manu-page-title'>
                            <h1 className='page-title'>Pricing</h1>
                        </div>
                        <div className='page-content pricing-page-content'>
                            <div className="pricing-main-content">
                                <Row>
                                    {
                                        PricingData.map((item, index) => {
                                            return (
                                                <Col lg={3} index={index} className='col-md-6'>
                                                    <div className="pricing-grid-item pricing-card">
                                                        <div className="customer-counting">
                                                            <span>{item.cutomerQuantity}</span>
                                                        </div>
                                                        <div className="price-plan">
                                                            <span>{item.pricePlan}</span>
                                                        </div>
                                                        <div className="plan-features">
                                                            <ul className='price-plan-features-list-content'>
                                                                <li>{item.improveAccountPage}</li>
                                                                <li>{item.multilingual}</li>
                                                                <li>{item.quickReorder}</li>
                                                                <li>{item.manageProfile}</li>
                                                                <li>{item.extraPages}</li>
                                                                <li>{item.customeFields}</li>
                                                                <li>{item.contactForm}</li>
                                                                <li>{item.recentlyViewd}</li>
                                                                <li>{item.topOrderProducts}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="plan-view-buttons">
                                                            <a href={item.ViewLink} target="_blank">{item.ButtonName}</a>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }

                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Pricing;