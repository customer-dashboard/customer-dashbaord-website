import React from "react";
import StartFree from "../StartFree";
import { ProductHistoryEssentailTop } from "../../middleware/BlogsTopSectionData";
import BlogsTopSection from "../BlogsTopSection";
import parse from "html-react-parser";
import ProductHistoryEssentailFullPageContent from "./FullBlogContent/ProductHistoryEssentailFullPageContent";
export default function ProductHistoryEssentail() {
  return (
    <>
      <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section pt-5">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  <BlogsTopSection data={ProductHistoryEssentailTop} />
                  <div className="container mb-5">
                    <div className="fullpagemaincontentwithfullinfo pb-5">
                      {/* <ProductHistoryEssentailFullPageContent /> */}
                      {parse(ProductHistoryEssentailFullPageContent())}
                    </div>
                  </div>
                  <StartFree />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
