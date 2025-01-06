import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'

function ChooseAccountType(props) {

  const { showComponents, setShowComponents } = props;

  const handleChooseAccountType = async (value) =>{
    setShowComponents(value);
    localStorage.setItem("AccountType",value)
  }
  const svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 31" fill="none">
  <circle cx="16" cy="15.5737" r="14.7457" stroke="black" stroke-width="1.36114"/>
  <path d="M9.05823 15.5001H23.2908M23.2908 15.5001L17.9651 10.1743M23.2908 15.5001L17.9651 20.8258" stroke="black" stroke-width="1.2341" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  return (
    <>
    
        <section id='choose_customer_account_type' className='mb-5 mt-5'>
            <div className='container'>
                <h2 className='text-center fw-600'>Choose which version of <span style={{color:"#eb4503"}}>Customer Account</span> you are using</h2>
                <div className='choose_version_subhead mt-4 mb-4 text-center fw-600'>
                    <p><span>Customer Dashboard Pro</span> proudly stands as the only app offering seamless support for both the <span>New Customer Accounts </span> (passwordless login with a one-time verification code) and the <span>Legacy Customer Accounts</span>  (email and password login).</p>
                </div>
                <div>
                </div>
                <Row className={`align-items-center justify-content-center mt-5 ${!showComponents ? "button__ btn__ btn--shockwave is-active__" : ''}`} >
                    <Col lg={5}>
                        <div onClick={()=>handleChooseAccountType("New Customer Account")} className={`customera_account_version customer_account_version_new ${showComponents == 'New Customer Account' ? 'selected__version__' : ''} `}>
                            <div className="account_version_features_wraper">
                                <div className="features_container_ text-center">
                                    <div className="account_feature_badge">
                                    Recommended By Shopify
                                    </div>
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
                                    {/* <div className="account_feature_content_data">
                                        <div className='text-center fw-600 account_feature_name'>Features</div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Profile Fields</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Self Retunr</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>B2B Support</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Order Tracking</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Store Credit</span>
                                        </div>
                                    </div> */}
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
                                    {/* <div className="account_feature_content_data">
                                        <div className='text-center fw-600 account_feature_name'>Features</div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Profile Fields</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Re-ordr</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Recently View Products</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Top Order Products</span>
                                        </div>
                                        <div className="account_feature_content_data_item">
                                            <span className='feature_icon__'>{svgIcon}</span>
                                            <span className='feature_title__'>Menu Builder</span>
                                        </div>
                                    </div> */}
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