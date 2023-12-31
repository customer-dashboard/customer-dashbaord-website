import React from "react";
import BlogsTopSection from "../BlogsTopSection";
import { CustomerDashboardTop} from "../../middleware/BlogsTopSectionData";
import StartFree from "../StartFree";
import parse from 'html-react-parser';
import CustomerDashboardBlogContent from "./FullBlogContent/CustomerDashboardBlogContent";

function CustomerDashboardFullBlog() {
  return (
    <>
      <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  <BlogsTopSection data={CustomerDashboardTop} />
                  <div className="container">
                  <div className="fullpagemaincontentwithfullinfo pb-5">
                  {
                   parse(CustomerDashboardBlogContent())
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

export default CustomerDashboardFullBlog;
