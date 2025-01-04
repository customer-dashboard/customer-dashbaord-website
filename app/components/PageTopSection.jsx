import { Col, Row, Image, Button } from 'react-bootstrap'
import LazyLoadedImage from '../components/lazyLoadImage/LazyLoadImage';
import shopifyOfficialLogoBlack from '../assets/images/ofiicialBlackShopifyLogo.png'
import { VideDemoModal } from './Modals/VideDemoModal';

function PagesTopSection(props) {
    const { data, modalShow, setModalShow } = props;
    return (
        <>
            <VideDemoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <section className='customer-account-page-manu'>
                <div className='container'>
                    <div className='page-content customer-account-page-manu-content'>
                        <div className="customer-account-main-content">
                            <Row className='align-items-center justify-content-between'>
                                <Col lg={5} className='acntpage-col-fst col-md-6'>
                                    <div className="acntpage-col-fst-cntnt">
                                        <h2 className='acntpagmnu-hero-heading main-page-heading'>
                                            {data.pageHeading}
                                        </h2>
                                        <h3 className='mt-4'>{data.pageSubHeading}</h3>
                                        <p className='mt-4'>{data.fistPara}</p>
                                        <p className='mt-3'>{data.secondPara}</p>
                                        {/* {
                                            data.new != true ? <div className="shpfacntpagbtns mt-4">
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' className='shpfy-trial-demo-btn acntpagetrlbtn'>Start Free Trial</Button>
                                            <Button href='https://customer-dashboard.myshopify.com/account/login' target='_blank' className='shpfy-trial-demo-btn acntpagedmobtn'>View Demo Store</Button>
                                        </div> : <div className="shpfacntpagbtns mt-4">
                                            <Button href='https://apps.shopify.com/customer-dashboard-pro' target='_blank' className='shpfy-trial-demo-btn acntpagetrlbtn'>Get Started</Button>
                                        </div>
                                        } */}
                                         <div className="main_section_btn">
                                    <Row>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-xsm-6">
                                            <div className="shopify">
                                            <Button href="https://apps.shopify.com/customer-dashboard-pro"  target="_blank" rel="norefferer" className=" transition-duretion d-flex s_btn btns justify-content-evenly shopify-official-logo-black">
                                                <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black"></Image>
                                              {/* <LazyLoadedImage src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" /> */}
                                            </Button>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-xsm-6 ">
                                        {/* <Button onClick={()=>setModalShow(true)} target='_blank' className='transition-duretion shpfy-trial-demo-btn acntpagedmobtn'>View Demo Store</Button> */}
                                        {/* <Button href='https://customer-dashboard.myshopify.com/account/login' target='_blank' className='transition-duretion shpfy-trial-demo-btn acntpagedmobtn'>View Demo Store</Button> */}
                                        <div className='transition-duretion banner_second_btn'>
                                            <a onClick={()=>setModalShow(true)}  className="btn header_btn  btn btn-primary">
                                                View Demo
                                            </a>
                                        </div>
                                        </Col>
                                    </Row>
                                </div>
                                    </div>
                                </Col>
                                <Col lg={data.video === true ? 7 : 6} className='acntpage-col-scnd col-md-6 mob-order after-md-margin-top'>
                                    <div className="acntpage-col-scnd-cntnt">
                                        {/* <Image src={data.pageImageData} alt='account-page-image'></Image> */}
                                        
                                        {
                                            data.video === true ? 
                                            <video width="100%" height="100%"  muted autoPlay loop>
                                            <source src={data.pageImageData} type="video/mp4"/>
                                           </video>
                                            : <LazyLoadedImage src={data.pageImageData} alt="account-page-image" />
                                        }
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