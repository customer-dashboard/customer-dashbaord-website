import React from "react";
import BlogsTopSection from "../BlogsTopSection";
import { CustomerAccountFeatureTop } from "../../middleware/BlogsTopSectionData";
import StartFree from "../StartFree";
import CustomerDashboardAccountFeature from "./FullBlogContent/CustomerDashboardAccountFeature";
import parse from "html-react-parser";
export default function CustomerDashBoardAccountFeatureFullBlog() {
  return (
    <>
      <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section pt-5">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  <BlogsTopSection data={CustomerAccountFeatureTop} />
                  <div className="container mb-5">
                    <div className="fullpagemaincontentwithfullinfo pb-5">
                      {parse(CustomerDashboardAccountFeature())}
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
