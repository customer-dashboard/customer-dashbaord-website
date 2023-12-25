import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'

function PagesTopSection(props) {
    const { data } = props;
    return (
        <>


            <section className='customer-account-page-manu'>
                <div className='container'>
                    <div className='page-content customer-account-page-manu-content'>
                        <div className="customer-account-main-content">
                            <Row className='align-items-center'>
                                <Col lg={6} className='acntpage-col-fst col-md-6'>
                                    <div className="acntpage-col-fst-cntnt">
                                        <h1 className='acntpagmnu-hero-heading main-page-heading'>
                                            {data.pageHeading}
                                        </h1>
                                        <h3 className='mt-4'>{data.pageSubHeading}</h3>
                                        <p className='mt-4'>{data.fistPara}</p>
                                        <p className='mt-3'>{data.secondPara}</p>
                                        {
                                            data.new != true ? <div className="shpfacntpagbtns mt-4">
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' className='shpfy-trial-demo-btn acntpagetrlbtn'>Start Free Trial</Button>
                                            <Button href='https://customer-dashboard.myshopify.com/account/login' target='_blank' className='shpfy-trial-demo-btn acntpagedmobtn'>View Demo Store</Button>
                                        </div> : <div className="shpfacntpagbtns mt-4">
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' className='shpfy-trial-demo-btn acntpagetrlbtn'>Get Started</Button>
                                        </div>
                                        }
                                    </div>
                                </Col>
                                <Col lg={6} className='acntpage-col-scnd col-md-6 mob-order after-md-margin-top'>
                                    <div className="acntpage-col-scnd-cntnt">
                                        <Image src={data.pageImageData} alt='account-page-image'></Image>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PagesTopSection