import React from 'react'
import { Col, Row } from 'react-bootstrap';

function FeaturesContent({features}) {
  return (
    <>
    
    <Row className='featurContentMainWraper justify-content-center'>
              <Col lg={10}>
                <Row className='justify-content-center featurContentMainWraper'>
                  {
                    features.map((item, index) => {
                      return(
                      <Col lg={4} className='col-md-4 col-sm-6'>
                         <div className='transition-duretion' style={{cursor:'pointer'}}>
                        <div className=' d-flex justify-content-center align-items-center'>
                          <div className="featured-icon">
                            <img src={item.featureImage} alt={item.imageAlt} title={item.imageAlt}/>
                          </div>
                        </div>
                        <div className="feature-name text-center">
                            <span>{item.featureName}</span>
                          </div>
                          <div className="featurContent text-center">
                            <p>{item.featureDescription}</p>
                          </div>
                          </div>
                      </Col>
                      );
                    })
                  }
                </Row>
              </Col>
            </Row>
    
    </>
  )
}

export default FeaturesContent