import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

function ChooseAccountType(props) {

  const { showComponents, setShowComponents } = props;
  const handleChooseAccountType = async (value) =>{
    setShowComponents(value);
    localStorage.setItem("AccountType",value)
  }

  return (
    <>
    
        <section id='choose-customer-account-version' className='mb-5 mt-3'>
            <div className='container'>
                <h2 className='text-center fw-600'>Choose which version of <span style={{color:"#eb4503"}}>Customer Account</span> you are using</h2>
                <div className='choose_version_subhead mt-4 mb-4 text-center fw-600'>
                    <p><span>Customer Dashboard Pro</span> proudly stands as the <span> only app</span> offering seamless support for both the <span>New Customer Accounts </span> (passwordless login with a one-time verification code) and the <span>Legacy Customer Accounts</span>  (email and password login).</p>
                </div>
                <div>
                </div>
                <Row  className={`align-items-center justify-content-center mt-5 ${!showComponents ? "zoom-in-zoom-out" : ''}`} >
                    <Col lg={5}>
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
                    <Col lg={5}>
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