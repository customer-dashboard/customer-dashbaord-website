import React from 'react'
// import { Row,Col,Image,Button } from 'react-bootstrap'
// import IntegrationImage from '../assets/images/NewDataImages/integration.avif';
import PagesTopSection from './PageTopSection';
import { IntegrationAndPartnerPageData } from '../middleware/PageTopSectionData';
import Aos from 'aos';
import { useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { integrationdata } from '../middleware/IntegrationsData';
function IntegrationsAndPartners() {


    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        Aos.refreshHard();
    }, []);

  return (
    <>

            <section className='main-container-for-pndin pt-5 pb-5'>
            <div className="container">
              <div className="partners-integrations-main-content-wraper pt-4">
                <div className="p-i-h text-center">
                  <h1 className='fw-600'>Integrations & partners</h1>
                </div>
                <Row className='mt-5 justify-content-center'>
                    {
                        integrationdata.map((items,index)=>{
                            return <>
                                <Col lg={3} index={index} className='col-md-4 col-sm-6'>
                                  <a href={items.link} target="_blank" rel="noopener noreferrer" className='text-decoration-no'>
                                  <Row className="main-integration-container-grid mb-5 align-items-center">
                                  <Col lg={3} className="in-pnr-logo-img col-md-3 col-sm-3">
                                  <Image src={items.logo} alt='integration-logo'></Image>
                                  </Col>
                                    <Col lg={9} className='col-md-9 col-sm-9'>
                                    <h5 className='h-color-dark fw-600'>{items.heading}</h5>
                                    {/* <p>{items.content}</p> */}
                                    </Col>
                                  </Row>
                                  </a>
                                </Col>
                            </>
                        })
                    }
                </Row>
              </div>
              </div>
            </section>
    
    </>
    )
}

export default IntegrationsAndPartners