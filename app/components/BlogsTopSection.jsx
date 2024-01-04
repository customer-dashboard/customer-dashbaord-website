import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

function BlogsTopSection({data}) {

    const propData = data;

  return (
    <>
    {/* <div className='topofTOpsection pb-5 pt-5 text-center'>
      <div className="container">
        <h1 className='fw-600 h-color-dark mb-4'>Blog</h1>
        <h3 className='fw-600 h-color-dark'>Read Our Blog</h3>
      </div>
    </div>   */}
    <div className="container mb-5">
     <div className="tpmncontainerwithgrid pt-5 pb-5 mt-5 mb-5 pb-5">
     <Row>
      <Col lg={6}>
      <div className="full-page-blog-data-time pb-4 fw-600 h-color-dark d-flex d">
        <span className='d-block dttm-bage'>{propData.Date}</span> <span className='blog-tag-bage'>{propData.Tag}</span>
      </div>
      <h1 className="full-page-blog-main-heading mb-5 fw-600 h-color-dark" >{propData.Heading}</h1>
      <p>{propData.SubHeading}</p>
      </Col>
      <Col lg={6}>
      {/* <Image src={propData.BannerImage} alt='blog-page-image' className='flpgtpscnimg'></Image> */}
      <LazyLoadedImage src={propData.BannerImage} className='flpgtpscnimg'  alt="blog-page-image" />
      </Col>
   </Row>
     </div>
    </div>
    
    </>
  )
}

export default BlogsTopSection