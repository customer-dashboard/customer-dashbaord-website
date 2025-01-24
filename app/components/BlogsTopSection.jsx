import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import LazyLoadedImage from "./lazyLoadImage/LazyLoadImage";
import parse from "html-react-parser";

function BlogsTopSection({ data }) {
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
        <div className="tpmncontainerwithgrid pt-5 pb-5 mt-5 mb-5 pb-5 m-pt-none m-mt-none">
          <Row className="justify-content-between">
            <Col lg={5}>
              <div className="full-page-blog-data-time pb-4 fw-600 h-color-dark d-flex d">
                <span className="d-block dttm-bage ">
                  {parse(propData.Date)}
                </span>
                <span className="blog-tag-bage">{propData.Tag}</span>
              </div>
              <h1 className="full-page-blog-main-heading mb-4 fw-600 h-color-dark">
                {parse(propData.Heading)}
              </h1>
              <h3 className="subheading_blogs">{propData.SubHeading}</h3>
              <Row>
                <Col lg={6}>
                <a href="https://apps.shopify.com/customer-dashboard-pro?utm_source=customer-dashboard-pro" target="_blank" rel="noopener noreferrer">
               <Image className="w-100" src="https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/ofiicialBlackShopifyLogo.png" alt="customer account logo" title="customer account logo"/>
               </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              {/* <Image src={propData.BannerImage} alt='blog-page-image' className='flpgtpscnimg'></Image> */}
              <LazyLoadedImage
                src={propData.BannerImage}
                className="flpgtpscnimg w-100"
                alt="blog-page-image"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogsTopSection;
