import { Col, Row } from 'react-bootstrap'
// import { FeaturedData } from '../middleware/FeaturedContentDataM';
import parse from 'html-react-parser';
function FeaturedContent({data,features}) {
  return (
    <>
      <section className='section-4-acntpage'>
        <div className='sec-4-acntpageconatiner'>
          <div className="container" >
            <div className='section-4-main-heading feature-com-head'>
              <h2 className='fw-600'>{parse(data[0].heading)}</h2>
              <p className='mt-4 feature-com-subhead'>{parse(data[0].subheading)}</p>
            </div>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedContent