import React from "react";
import { IndustriesData } from "./Industris";
import { Image } from "react-bootstrap";

function IndustriesIndex() {
  return (
    <>
      <section id="industries-solutions">
        <div className="shopify-industries-solution mt-5 mb-5">
          <div className="container">
            <div className="shopify-industries-solution-container">
              <div className="industries-main-heading mb-5 mt-3">
              <h1 className="text-center fw-600">Driving Results Across Industries</h1>
              <h2 className="text-center fw-600">Discover how our tailored solutions drive success across diverse industries.</h2>
              </div>
              <div className="shopify-industries-items">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-10">
                    <div className="row">
                      {IndustriesData.map((Industry) => {
                        return (
                          <>
                            <div className="col-md-6 p-0 border">
                              <div className="shopify-industy-single-item">
                                <div className="industry-image">
                                  <Image
                                    className="w-100"
                                    src={Industry.ImageUrl}
                                    alt={Industry.ImageAlt}
                                    title={Industry.ImageAlt}
                                  />
                                </div>
                                <div className="per_industry-name_">
                                  <div className="industry-name_">
                                    <h2 className="fw-600">{Industry.BrandName}</h2>
                                  </div>
                                </div>
                               <a className="text-decoration-none" href={Industry.Link}  rel="noopener noreferrer">
                               <div className="industry-main-content">
                                  <div className="industry-name_">
                                     <h2>{Industry.BrandName}</h2>
                                  </div>
                                  <div className="industry-use-cases mt-4 text-center">
                                    <h3>Category</h3>
                                    <p>{Industry.Category}</p>
                                  </div>
                                  <div className="industry-use-cases mt-2 text-center">
                                    <h3>Use Case</h3>
                                    <p>{Industry.UseCase}</p>
                                  </div>
                                </div>
                               </a>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustriesIndex;
