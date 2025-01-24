import React, { useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

function ChooseAccountType(props) {

  const { showComponents, setShowComponents } = props;
  const [rotation, setRotation] = useState(0);

  const handleChooseAccountType = async (value) =>{
    setShowComponents(value);
    localStorage.setItem("AccountType",value)
  }

  const handleRotationChange = (event) => {
    const value = event.target.value;
    setRotation(value);
    document.body.style.setProperty("--scene-rotation", value);
  };

  return (
    <>
    
        <section id='choose-customer-account-version' className='mb-5 mt-3 mt-lg-0'>
            <div className='container'>
            <div className="mb-3 built-for-shopify-button text-center">
                <span className="built-button-wraper">
                    <span className="built-shopify-logo">
                    <div className="diamond-container">
                <div className="diamond">
                <svg class="tw-h-[0.75em] " viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m13 0-1 5-4 9 8-9.5L13 0ZM3 0l1 5 4 9-8-9.5L3 0Z" fill="#0D79A7"></path><path d="m3 0 1 5 4 9 4-9 1-5H3Z" fill="#49A3C9"></path><path d="M8 14 4 5l-4-.5L8 14ZM8 14l4-9 4-.5L8 14Z" fill="#07425B"></path><path d="M8 5.5 4 5l4 9 4-9-4 .5Z" fill="#0D79A7"></path><path d="m4 5 4-5 4 5-4.001.5L4 5Z" fill="#95D5F0"></path><path d="M4 5 3 0h5L4 5ZM12 5l1-5H8l4 5Z" fill="#49A3C9"></path><path d="M4 5 3 0 0 4.5 4 5ZM12 5l1-5 3 4.5-4 .5Z" fill="#0D79A7"></path></svg>
                </div>
                </div>
                    </span>
                    <span className="built-shopify-text">Built for Shopify</span>
                </span>
            </div>
                <h2 className='text-center fw-600'>Select the <span style={{color:"#eb4503"}}>Customer Account Version </span> You Use</h2>
                <div className='choose_version_subhead mt-2 mb-4 text-center fw-600'>
                    <p>Supports both  <strong>Legacy  ( Email & Password )</strong> and <strong> New  ( Passwordless)</strong>   <span>Shopify   Customer Accounts</span></p>
                    {/* <p><span>Customer Dashboard Pro</span> the <span> only app</span> Supporting Both <span>New </span>(Passwordless) and <span>Legacy</span> (Email & Password) Shopify Accounts</p> */}
                </div>
                <div>
                </div>
                <Row  className={`align-items-center justify-content-center mt-5 ${!showComponents ? "zoom-in-zoom-out" : ''}`} >
                    <Col lg={4} md={6}>
                        <div onClick={()=>handleChooseAccountType("New Customer Account")} className={`customera_account_version customer_account_version_new ${showComponents == 'New Customer Account' ? 'selected__version__' : ''} `}>
                            <div className="account_version_features_wraper">
                                <div className="features_container_ text-center">
                                    {/* <div className="account_feature_badge">
                                    Recommended By Shopify
                                    </div> */}
                                    <div className="account_feature_circle">
                                    <div className="account_feature_circle_in"></div>
                                    </div>
                                    <div className="account_feature_name">
                                        New Customer Account
                                    </div>
                                    <div className="account_feature_content">
                                        Customers log in with a one-time code sent to their email (no password). Works with B2B 
                                    </div>
                                    <Image src='https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/new%20(2).png' alt='new customer account login page image' title='new customer account login page image' />
                                    {
                                        <div className={`button-container_ ${showComponents == 'New Customer Account' ? "visible" : "hidden"}`}>
                                            <Button target='_blank' href='https://shopify.com/73535684832/account' className='animated-button'>View Demo</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}  md={6}>
                    <div onClick={()=>handleChooseAccountType("Classic Customer Account")} className={`  customera_account_version customer_account_version_classic ${showComponents == 'Classic Customer Account' ? 'selected__version__' : ''} `}>
                            <div className="account_version_features_wraper">
                                <div className="features_container_ text-center">
                                    <div className="account_feature_circle">
                                        <div className="account_feature_circle_in"></div>
                                    </div>
                                    <div className="account_feature_name">
                                        Legacy  Customer Account
                                    </div>
                                    <div className="account_feature_content">
                                        Customers create an account and log in with email and password 
                                    </div>
                                    <Image src='https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/old%20(2).png' alt='legacy customer account login page image' title='legacy customer account login page image' />
                                    {
                                        <div className={`button-container_ ${showComponents == 'Classic Customer Account' ? "visible" : "hidden"}`}>
                                          <Button target='_blank' href='https://customer-dashboard.myshopify.com' className='animated-button'>View Demo</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    
    </>
  )
}

export default ChooseAccountType



// https://shopify.com/73535684832/account
// <Col lg={4}>
//                         <Button onClick={()=>handleChooseAccountType("New Customer Account")} >New Customer Account</Button>
//                     </Col>
//                     <Col lg={4}>
//                         <Button onClick={()=>handleChooseAccountType("Classic Customer Account")} >Classic Customer Account</Button>
//                     </Col>