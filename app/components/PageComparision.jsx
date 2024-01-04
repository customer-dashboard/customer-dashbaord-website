import { Col, Row } from 'react-bootstrap'
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';


function PagesComparison(prop) {
    const { pageData } = prop;
    return (
        <>
            <section className='section-5-acntpage'>
                <div className='section-5-main-container'>
                    <div className='container'>
                        <div className='section-5-content'>
                            <div className="sec-5heading">
                                <h2>{pageData.MainHeading}</h2>
                                <p>{pageData.SubHeading}</p>
                            </div>
                            <Row className='row-container-for-account-page-sec-5 mx-3 '>
                                <Col lg={6} className='sec-5columns sec-5col-first col-md-6 col-sm-6'>
                                    <div className='sec-5-fstcol '>
                                        <h5>{pageData.OldPageHeading}</h5>
                                        {/* <Image src={pageData.OldPageImage} alt={pageData.OldImageAlttext}></Image> */}
                                        <LazyLoadedImage src={pageData.OldPageImage} alt={pageData.OldImageAlttext} />
                                        
                                    </div>
                                </Col>

                                <Col lg={6} className='sec-5columns sec-5col-second col-md-6 col-sm-6'>
                                    <div className="sec-5-scndcol">
                                        <h5>{pageData.NewPageHeading}</h5>
                                        {/* <Image className='customer-dashboardproimage' src={pageData.NewPageImage} alt={pageData.NewImageAlttext}></Image> */}
                                        <LazyLoadedImage className='customer-dashboardproimage' src={pageData.NewPageImage} alt={pageData.NewImageAlttext} />
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

export default PagesComparison