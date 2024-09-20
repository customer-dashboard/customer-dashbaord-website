import React from 'react'
import parse from 'html-react-parser';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

import { Row, Col, Image } from 'react-bootstrap';
function ImageWithText(props) {
    const { imageWithTextData, withoutBackground } = props;
    
    return (
        <>
            <section className='account-page-section-3'>
                <div className={withoutBackground === true ? '' : 'acnt-pg-sctn-3-container'}>
                    <div className='container'>
                        <div className='acnt-pg-inner-feature-container' data-aos="fade-up">
                            {
                                imageWithTextData.map((item) => {
                                    return (
                                        <>

                                            {
                                                item.right ? <Row className='align-items-center Drive-sales-group mb-5 mt-3 justify-content-around'>
                                                    <Col lg={5} className='col-md-6'>
                                                        <div className="acnt-pg-inner-feature-col-first">
                                                            <h2 style={{color:withoutBackground === true ? 'black' : 'white'}}>{item.heading}</h2>
                                                            <div className='imgwithtext-caption mt-4'>{parse(item.caption)}</div>
                                                        </div>
                                                    </Col>
                                                    {/* col-6 first ended */}
                                                    <Col lg={5} className='col-md-6 after-md-margin-top'>
                                                        <div className="acnt-pg-inner-feature-col-second">
                                                            {/* <Image src={item.imageUrl} alt={item.altText}></Image> */}
                                                             {item.video == true ?  
                                                                 <video width={"100%"}  muted autoPlay loop >
                                                                 <source src={item.imageUrl} type="video/mp4"/>
                                                                 </video>
                                                             :  <LazyLoadedImage src={item.imageUrl} alt={item.altText} />}
                                                        </div>
                                                    </Col>
                                                    {/* col-6 second ended */}
                                                </Row> : <Row className='align-items-center Drive-sales-group mb-5 mt-3 justify-content-around'>
                                                    <Col lg={5} className='col-md-6 after-md-margin-top mt-5 mob-order'>
                                                        <div className="acnt-pg-inner-feature-col-second">
                                                            {/* <Image src={item.imageUrl} alt={item.altText}></Image> */}
                                                            {item.video == true ?       
                                                               <video width={"100%"} muted autoPlay loop >
                                                               <source src={item.imageUrl} type="video/mp4"/>
                                                               </video>
                                                             :  <LazyLoadedImage src={item.imageUrl} alt={item.altText} />}
                                                        </div>
                                                    </Col>
                                                    {/* col-6 second ended */}
                                                    <Col lg={5} className='col-md-6 mt-5'>
                                                        <div className="acnt-pg-inner-feature-col-first">
                                                            <h2 style={{color:withoutBackground === true ? 'black' : 'white'}}>{item.heading}</h2>
                                                            <div className='imgwithtext-caption mt-4'>{parse(item.caption)}</div>
                                                        </div>
                                                    </Col>
                                                    {/* col-6 first ended */}

                                                </Row>
                                            }

                                        </>
                                    );
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ImageWithText