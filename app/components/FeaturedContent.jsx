import { Col, Row } from 'react-bootstrap'
import { FeaturedData } from '../middleware/FeaturedContentDataM';
function FeaturedContent() {


  return (
    <>
      <section className='section-4-acntpage'>
        <div className='sec-4-acntpageconatiner'>
          <div className="container" >
            <div className='section-4-main-heading feature-com-head'>
              <h2 className='fw-600'>Explore Customer Dashboard Pro: Beyond Basic Shopify Accounts.</h2>
              <p className='mt-4 feature-com-subhead'>Revolutionize Customer Interaction: Unleash the Power of Customer Dashboard Pro's Advanced Features for Unparalleled Insights and Engagement.</p>
            </div>
            <Row className='featurContentMainWraper justify-content-center'>
              <Col lg={10}>
                <Row className='justify-content-center featurContentMainWraper'>
                  {
                    FeaturedData.map((item, index) => {
                      return(
                       
                      <Col lg={4} className='col-md-4 col-sm-6'>
                         <div className='transition-duretion' style={{cursor:'pointer'}}>
                        <div className=' d-flex justify-content-center align-items-center'>
                          <div className="featured-icon">
                            <img src={item.featureImage} alt={item.featureName}/>
                          </div>
                        </div>
                        <div className="feature-name text-center">
                            <span>{item.featureName}</span>
                          </div>
                          <div className="featurContent text-center">
                            <p>{item.featuredContent}</p>
                          </div>
                          </div>
                      </Col>
                    
                      );
                    })
                  }
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedContent