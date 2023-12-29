import React from "react";
import BlogsTopSection from "../BlogsTopSection";
import { klaviyoTop } from "../../middleware/BlogsTopSectionData";
import StartFree from "../StartFree";
import KlaviyoFullBlogContent from "./FullBlogContent/KlaviyoFullBlogContent";
import parse from 'html-react-parser';

function KlaviyoFullBlog() {
  return (
    <>
      <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  <BlogsTopSection data={klaviyoTop} />
                  <div className="container">
                  <div className="fullpagemaincontentwithfullinfo pb-5">
                  {
                   parse(KlaviyoFullBlogContent())
                  }
                  </div>
                  </div>
                  <StartFree/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default KlaviyoFullBlog;
