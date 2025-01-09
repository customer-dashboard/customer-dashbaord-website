import React from 'react'
import { Col, Row } from 'react-bootstrap';

function ViewDemoButton(props) {
    const { showComponents } = props;
  return (
    <Row className='justify-content-center'>
      <Col lg={3} md={5}  className="col-md-6 col-sm-6">
        <div className='transition-duretion banner_second_btn view_demo_button_component'>
            <a  
                target={showComponents ? '_blank' : ''}
                href={  showComponents == 'New Customer Account' ? "https://shopify.com/73535684832/account"
                        : showComponents == 'Classic Customer Account'
                        ? "https://customer-dashboard.myshopify.com"
                        : "#choose-customer-account-version"
                      }
                className="btn header_btn btn btn-primary"
                >
                View Demo
              </a>
        </div>
        </Col>
      </Row>
  )
}

export default ViewDemoButton