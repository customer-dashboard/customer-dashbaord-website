import React from "react";
import { Col, Row } from "react-bootstrap";

function HomePlan() {
  const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<circle cx="10.5" cy="10.5" r="10.5" fill="#3BB6B6"/>
<path d="M5.37323 12.1243C5.31669 12.0666 5.26607 12.0047 5.22257 11.9403C5.17888 11.8756 5.14072 11.8064 5.10928 11.7346C5.0043 11.4973 4.97583 11.2411 5.02011 10.9967C5.0644 10.754 5.18066 10.522 5.36493 10.3312L5.43215 10.2656C5.88551 9.85574 6.57316 9.77941 7.11253 10.0872C7.18964 10.1309 7.26319 10.1829 7.33179 10.2423L7.33852 10.2481C7.7203 10.5955 8.36624 11.1636 8.79034 11.5217L9.15433 11.8313L13.6092 7.39829C13.6719 7.33696 13.7409 7.282 13.8139 7.23399C13.8886 7.18503 13.9671 7.14358 14.0482 7.11001C14.13 7.07606 14.2166 7.04942 14.3052 7.03104C14.3936 7.01247 14.4837 7.00197 14.5733 7.00009H14.5784C14.6676 6.99916 14.755 7.00516 14.8436 7.01941C14.93 7.03329 15.0168 7.05561 15.1071 7.08862C15.1904 7.11882 15.2702 7.15671 15.3458 7.20191C15.4179 7.24524 15.4883 7.29682 15.5545 7.35609L15.5866 7.38366C15.6491 7.44237 15.7054 7.50614 15.7546 7.57385C15.8053 7.64306 15.8485 7.71752 15.8835 7.7948C15.9197 7.87245 15.9478 7.9546 15.9674 8.03844C15.9871 8.12078 15.9978 8.20631 16 8.29353V8.33667C15.9992 8.41151 15.9917 8.48747 15.9775 8.5625C15.9618 8.64409 15.9383 8.72436 15.9071 8.80089C15.8754 8.87929 15.8349 8.95563 15.7871 9.02784C15.74 9.09855 15.6846 9.16645 15.6226 9.22853L10.241 14.5853C10.1777 14.6495 10.1099 14.7058 10.0389 14.7538C9.96595 14.8033 9.88726 14.8459 9.80501 14.8815C9.72256 14.9168 9.63675 14.9447 9.55035 14.964C9.46434 14.9835 9.37458 14.9952 9.28344 14.9991L9.25872 14.9997C9.17509 15.0014 9.09264 14.9967 9.01336 14.985L8.99319 14.9813C8.91114 14.9682 8.83126 14.9486 8.75494 14.9231C8.67171 14.895 8.59025 14.8588 8.51255 14.8153L8.50009 14.8078C8.42674 14.7658 8.35833 14.7183 8.29605 14.6664L8.28359 14.6551C7.9712 14.3801 7.63173 14.1003 7.28849 13.8175C6.69397 13.3274 5.8693 12.6204 5.37501 12.1256L5.37323 12.1243Z" fill="white"/>
</svg>
const crosIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<circle cx="10.5" cy="10.5" r="10.5" fill="#FFDDDD"/>
<path d="M7.5554 5L10.3679 9.53835H10.4531L13.2656 5H14.821L11.3906 10.4545L14.821 15.9091H13.2656L10.4531 11.456H10.3679L7.5554 15.9091H6L9.51563 10.4545L6 5H7.5554Z" fill="#F43D3F"/>
</svg>
  return (
    <>
      <section className="home-page-pricing-camp pt-5 pb-5">
        <div className="main-home-pricing-comparison">
          <div className="container">
            <Row className="justify-content-center">
              <Col lg={8}>
                <Row className="align-items-center">
                  <Col sm={6}>
                    <ul >
                      <li>Manage profile & delivery address</li>
                      <li>Integration engineer</li>
                      <li>Third party app integration with account pag</li>
                      <li>Multi language</li>
                      <li>Profile page</li>
                      <li>Add extra page</li>
                      <li>Custom field ( profile )</li>
                      <li>Add extra tab</li>
                      <li>Registration form</li>
                      <li>Image Upload</li>
                      <li>Text Banners</li>
                      <li>Image Banner</li>
                      <li>Recently viewed products</li>
                      <li>Re-Order</li>
                      <li>Contact form in order history</li>
                      <li>Customer Support Widget</li>
                      <li>Testimonials</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                     <div className="row">
                       <div className=" col-sm-6 text-center p-0">
                        <h3 className="font-alverata-normal m-0">New</h3>
                        <h4>customer account</h4>
                          <div className="new-account account-compair">
                            <ul>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                    </ul>
                          </div>
                    <div className=" pricing-view-demo mt-4">
                        <a href="https://shopify.com/73535684832/account" className="universal-btn" target="_blank" rel="noopener noreferrer">View demo</a>
                    </div>
                   
                      </div>
                       <div className="col-sm-6 text-center p-0">
                        <h3 className="font-alverata-normal m-0">Legacy</h3>
                        <h4>customer account</h4>
                        <div className="legacy-account account-compair ">
                            <ul>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{rightIcon}</li>
                      <li>{crosIcon}</li>
                      <li>{crosIcon}</li>
                    </ul>
                        </div>
                      <div className="pricing-view-demo mt-4">
                        <a href="https://customer-dashboard.myshopify.com" target="_blank" className="universal-btn" rel="noopener noreferrer">View demo</a>
                    </div>
                      </div>
                     </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePlan;
