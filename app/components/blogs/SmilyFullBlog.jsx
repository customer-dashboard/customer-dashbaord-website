import React from 'react'
import BlogsTopSection from '../BlogsTopSection'
// import { smilyTop } from '../../middleware/BlogsTopSectionData'
import StartFree from '../StartFree'

function SmilyFullBlog() {
  return (
    <>
    
    <main className="blg-full-pg-main-wraper">
        <section className="blg-full-page-section">
          <div className="main-container-blg-f-section">
            <div className="container-main">
              <div className="flblgpagecontainer">
                <div className="blg_fl_pg_headings">
                  {/* <BlogsTopSection data={smilyTop} /> */}
                  <StartFree/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        
    
    </>
  )
}

export default SmilyFullBlog