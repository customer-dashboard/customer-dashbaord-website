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
            <Row className='justify-content-center'>
              <Col lg={7}>
                <Row className='justify-content-center'>
                  {
                    FeaturedData.map((item, index) => {
                      return(
                      <Col lg={3} className='col-md-4 col-sm-6'>
                        <div className='main-items-of-featured-content transition-duretion'>
                          <div className="featured-icon">
                            {item.featureIcon}
                          </div>
                          <div className="feature-name">
                            <span>{item.featureName}</span>
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