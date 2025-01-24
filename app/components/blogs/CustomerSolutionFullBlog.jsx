import React from "react";
import BlogsTopSection from "../BlogsTopSection";
import { CustomerSolutionTop } from "../../middleware/BlogsTopSectionData";
import StartFree from "../StartFree";
import CustomerSolutionBlogContent from "./FullBlogContent/CustomerSolutionBlogContent";
import parse from "html-react-parser";
function CustomerSolutionFullBlog() {
  return (
    <>
      <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section pt-5">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  <BlogsTopSection data={CustomerSolutionTop} />
                  <div className="container mb-5">
                    <div className="fullpagemaincontentwithfullinfo pb-5">
                      <CustomerSolutionBlogContent/>
                      {/* {CustomerSolutionBlogContent()} */}
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

export default CustomerSolutionFullBlog;
