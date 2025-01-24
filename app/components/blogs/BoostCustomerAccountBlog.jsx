import React from 'react'
import StartFree from '../StartFree'
import BoostCustomerAccountBlogData from './FullBlogContent/BoostCustomerAccountBlogData'
import { BoostCustomerAccountTopSectionData } from '../../middleware/BlogsTopSectionData'
import BlogsTopSection from '../BlogsTopSection'

function BoostCustomerAccountBlog() {
  return (
    <main className="blg-full-pg-main-wraper">
    <section className="blg-full-page-section">
      <div className="main-container-blg-f-section pt-5">
        <div className="container-main">
          <div className="flblgpagecontainer">
            <div className="blg_fl_pg_headings">
              <BlogsTopSection data={BoostCustomerAccountTopSectionData} />
              <div className="container mb-5">
                <div className="fullpagemaincontentwithfullinfo pb-5">
                  <BoostCustomerAccountBlogData/>
                </div>
              </div>
              <StartFree />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default BoostCustomerAccountBlog