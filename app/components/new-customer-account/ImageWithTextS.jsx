import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import shopifyOfficialLogoBlack from '../../assets/images/ofiicialBlackShopifyLogo.png';
function ImageWithTextS({data, showComponents}) {
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
                                <div className="main_section_btn">
                                    <Row>
                                        <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                                            <div className="shopify transition-duretion">
                                            <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black">
                                                <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black"></Image>
                                              {/* <LazyLoadedImage src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" /> */}
                                            </Button>
                                            </div>
                                        </Col>
                                        <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 ">
                                        <div className='transition-duretion banner_second_btn'>
                                            <a  
                                                target={showComponents ? '_blank' : ''}
                                                href={  showComponents == 'New Customer Account' ? "https://shopify.com/73535684832/account"
                                                         : showComponents == 'Classic Customer Account'
                                                         ? "https://customer-dashboard.myshopify.com"
                                                         : "#choose-customer-account-version"
                                                      }
                                                className="btn header_btn btn btn-primary"
                                                >
                                                View Demo
                                                </a>
                                        </div>
                                        </Col>
                                    </Row>
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