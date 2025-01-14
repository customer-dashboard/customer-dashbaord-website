import React from "react";
import parse from "html-react-parser";
import { Image } from "react-bootstrap";
import MainBanner from "./shopify-plus-study-main-content/MainBanner";
import InformationTable from "./shopify-plus-study-main-content/InformationTable";

function CaseStudyStatusPage(props) {
  const { dataValue } = props;

  return (
    <>
      <div className="plus-case-study-material-wraper">
        <div className="plus-case-study-continer">
          <section className="mt-5 mb-sm-5 mb-2">
            <div className="pt-3 pb-5">
              <div className="plus-case-study-hero-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="hero-image-container">
                        {/* <Image className='w-100 single-page-case-study-hero-img' src={dataValue.HeroImage} 
                                alt={dataValue.HeroImageAlt}
                                title={dataValue.HeroImageAlt}
                        /> */}
                        <MainBanner dataValue={dataValue} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <InformationTable dataValue={dataValue} />
                      <div className="case-study-brand-roi-wraper row align-items-center justify-content-center mt-md-4 mt-3">
                        <div className="_brand-roi text-center col-sm-6 col-md-4 w-50">
                          <div className="_brand-roi_heading">
                            Customer Loyalty
                          </div>
                          <div className="_brand-roi_data app-color">
                            <span>{dataValue.ROI}</span>
                          </div>
                        </div>
                        <div className="_brand-revenue text-center col-sm-6 col-md-4 w-50">
                          <div className="_brand-roi_heading">
                            Repeat Purchases
                          </div>
                          <div className="_brand-roi_data app-color">
                            <span>{dataValue.Revenue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 mb-5">{dataValue.Conclusion}</section>
        </div>
      </div>
    </>
  );
}

export default CaseStudyStatusPage;
