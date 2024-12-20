import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

function ImageWithTextS({data}) {
  return (
    <>
    
    <section className="image_with_text_new">
                <div className="banner_background">
                    <Container>
                        <Row className="align-items-center mt-4">
                            <Col lg={5} className="banner_left_new">
                                <div className='image_with_text_new_heading mb-3'>
                                    <h2>{data[0].title} <span>{data[0].titleColor}</span></h2>
                                </div>
                                 <div className='image_with_text_new_sub_heading mb-3'>
                                    <h6 className='font-weight-bold'>{data[0].subTitle}</h6>
                                </div>
                                <div className='image_with_text_new_para mb-4'>
                                    <p>{data[0].description}</p>
                                </div>
                                <div className='image_with_text_new_button'>
                                    <a target="_blank" href={data[0].buttonUrl} className="btn header_btn  btn btn-primary">
                                        Install now
                                    </a>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="shopify_video banner_video hero-banner-image">
                                    <Image loading='lazy' title={data[0].imageAlt} src={data[0].imageUrl} alt={data[0].imageAlt} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
    
    </>
  )
}

export default ImageWithTextS