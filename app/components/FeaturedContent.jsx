import { Col, Row } from 'react-bootstrap'
// import { FeaturedData } from '../middleware/FeaturedContentDataM';
import FeaturesContent from '../components/new-customer-account/FeaturesContent';
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
            <FeaturesContent features={features}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedContent