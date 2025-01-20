import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from '@remix-run/react';
import LazyLoadedImage from '../lazyLoadImage/LazyLoadImage';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

function Integration(props) {
  const {data , propMain} = props;
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    // Reverse the data only once or whenever the props change
    if (data) {
      setMainData([...data].reverse());
    }
  }, [data]);
    const externalLinkSvg = <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
    <g id="Interface / External_Link">
    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </svg>

  return (
    <>
    
   {
    propMain === 'partners' ? mainData.length < 1 ? <Row>
    {
      Array.from({ length: 8 }).map((_, index) => (
        <Col lg={3} className='col-md-6 col-xmd-3 col-sm-6' key={index}>
          <Row className="main-integration-container-grid mb-5 align-items-center">
            <Col lg={3} className="in-pnr-logo-img col-md-3 col-sm-3">
              <Skeleton circle={true} height={50} width={50} />
            </Col>
            <Col lg={9} className='col-md-9 col-sm-9'>
              <Skeleton height={30} width="80%" className="fw-600 mt-xsm-3" />
              <Skeleton height={20} width="90%" className="mt-2" />
            </Col>
            <Skeleton height={20} width="100%" className="mt-4 integration-grid-content-container" />
            <Row className='align-items-center justify-content-between'>
              <Col lg={6} className='col-md-6 col-sm-6 col-xsm-6'>
                <div className="app-store-integration-card-link integration-card-link__">
                  <Skeleton height={30} width="60%" />
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      ))
    }
  </Row> :  <Row className='mt-5 justify-content-center'>
  {
      mainData.map((items,index)=>{
          return <>
              <Col lg={3} index={index} className='col-md-6 col-xmd-3 col-sm-6'>
                <Row className="main-integration-container-grid mb-5 align-items-center">
                <Col lg={3} className="in-pnr-logo-img col-md-3 col-sm-3">
                <Link to={items.store} className='integration_and_partner' target='_blank'>
                    <LazyLoadedImage src={items.img} alt="integration-logo" />
                    </Link>
                </Col>
                  <Col lg={9} className='col-md-9 col-sm-9'>
                  {/* <p>{items.content}</p> */}
                  <h5 className=' fw-600 mt-xsm-3'>
                      <Link to={items.store} target='_blank' className='head-link-integration-grid'>
                      {items.title}
                      </Link>
                  </h5>
                  </Col>
                  <p className='mt-4 integration-grid-content-container'>{items.content}</p>
                  <Row className='align-items-center justify-content-between'>
                  <Col lg={6} className='col-md-6 col-sm-6 col-xsm-6'>
                    <div className="app-store-integration-card-link integration-card-link__">
                    <Link to={items.store} target='_blank'> <span className='external-link-svg'>{externalLinkSvg}</span>App Store</Link>
                    </div>
                  </Col>
                </Row>
                </Row>
              </Col>
          </>
      })
  }
  </Row> :<Row className='mt-5 justify-content-center'>
                    {
                        data.map((items,index)=>{
                            return <>
                                <Col lg={3} index={index} className='col-md-6 col-xmd-3 col-sm-6'>
                                  <Row className="main-integration-container-grid mb-5 align-items-center">
                                  <Col lg={3} className="in-pnr-logo-img col-md-3 col-sm-3">
                                  {
                                    items.blog === true ? (
                                      <Link to={items.blogLink} className='integration_and_partner'>
                                      <LazyLoadedImage src={items.logo} alt="integration-logo" />
                                      </Link>
                                    ) : (
                                      <Link to={items.link} className='integration_and_partner' target='_blank'>
                                      <LazyLoadedImage src={items.logo} alt="integration-logo" />
                                      </Link>
                                    )
                                  }
                                  </Col>
                                    <Col lg={9} className='col-md-9 col-sm-9'>
                                    {/* <p>{items.content}</p> */}
                                    {
                                      items.blog === true ? (
                                        <h5 className=' fw-600 mt-xsm-3'>
                                          <Link to={items.blogLink} className='head-link-integration-grid'>
                                          {items.heading}
                                          </Link>
                                        </h5>
                                      ) : (
                                        // <h5 className=' fw-600 mt-xsm-3'>{items.heading}</h5>
                                        <h5 className=' fw-600 mt-xsm-3'>
                                          <Link to={items.link} target='_blank' className='head-link-integration-grid'>
                                          {items.heading}
                                          </Link>
                                        </h5>
                                      )
                                    }
                                  
                                    </Col>
                                    <p className='mt-4 integration-grid-content-container'>{items.content}</p>
                                    <Row className='align-items-center justify-content-between'>
                                    <Col lg={6} className='col-md-6 col-sm-6 col-xsm-6'>
                                      <div className="app-store-integration-card-link integration-card-link__">
                                      <Link to={items.link} target='_blank'> <span className='external-link-svg'>{externalLinkSvg}</span>App Store</Link>
                                      </div>
                                    </Col>
                                    {
                                      items.blog === true ? (
                                        <Col lg={6} className='p-0 col-md-6 col-sm-6 col-xsm-6'>
                                      <div className="itegration-blog-link text-end integration-card-link__">
                                        <Link to={items.blogLink} className='text-end'><span className='external-link-svg'>{externalLinkSvg}</span>More info</Link>
                                      </div>
                                    </Col>
                                      ) : ""
                                    }
                                  </Row>
                                  </Row>
                                  
                                </Col>
                            </>
                        })
                    }
                </Row>
   }
    
    </>
  )
}

export default Integration