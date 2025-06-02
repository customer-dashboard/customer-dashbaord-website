import React, { useState } from "react";
import { klaviyoBlogData } from "../middleware/BlogGridData";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "@remix-run/react";
import topImage from "../assets/images/Logo/changelog.jpeg";
import LazyLoadedImage from "./lazyLoadImage/LazyLoadImage";
import StartFree from "./StartFree";
import Readytry from '../custlo-components/homepage/Readytry';

function SearchBar({ onSearch }) {
  return (
    <div className="search-box col-lg-6 m-auto col-md-7 col-sm-9">
      <input
        type="text"
        placeholder="Search...."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search__btn__">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M19.7309 18.3109L16.0209 14.6309C17.461 12.8353 18.1584 10.5562 17.9697 8.2622C17.781 5.9682 16.7206 3.83368 15.0064 2.29754C13.2923 0.761407 11.0547 -0.0595894 8.75382 0.00337096C6.45294 0.0663314 4.26362 1.00846 2.63604 2.63604C1.00846 4.26362 0.0663314 6.45294 0.00337096 8.75382C-0.0595894 11.0547 0.761407 13.2923 2.29754 15.0064C3.83368 16.7206 5.9682 17.781 8.2622 17.9697C10.5562 18.1584 12.8353 17.461 14.6309 16.0209L18.3109 19.7009C18.4039 19.7946 18.5145 19.869 18.6363 19.9198C18.7582 19.9706 18.8889 19.9967 19.0209 19.9967C19.1529 19.9967 19.2836 19.9706 19.4055 19.9198C19.5273 19.869 19.6379 19.7946 19.7309 19.7009C19.9111 19.5144 20.0119 19.2652 20.0119 19.0059C20.0119 18.7466 19.9111 18.4974 19.7309 18.3109ZM9.0209 16.0209C7.63643 16.0209 6.28305 15.6104 5.13191 14.8412C3.98076 14.072 3.08356 12.9788 2.55374 11.6997C2.02393 10.4206 1.88531 9.01314 2.1554 7.65527C2.4255 6.2974 3.09219 5.05012 4.07115 4.07115C5.05012 3.09219 6.2974 2.4255 7.65527 2.1554C9.01314 1.88531 10.4206 2.02393 11.6997 2.55374C12.9788 3.08356 14.072 3.98076 14.8412 5.13191C15.6104 6.28305 16.0209 7.63643 16.0209 9.0209C16.0209 10.8774 15.2834 12.6579 13.9706 13.9706C12.6579 15.2834 10.8774 16.0209 9.0209 16.0209Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
}

function BlogsGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = klaviyoBlogData.filter(
    (blog) =>
      blog.Heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.Content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.Date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const blogFound = filteredBlogs.length > 0;

  return (
    <>
      <main className="blog-main-page">
        <section className="blogs-grid-main-page-wraper">
          <div className="blogs-grid-container">
            <div className="blg-main-heading-wraper">
              <div className="container">
                <Row className="justify-content-between align-items-center">
                  <Col lg={12}>
                    <h1 className="fw-600 text-center">Blogs</h1>
                    {/* <p className="mb-5 text-center">In these blogs, we will discuss how to improve customer accounts in Shopify for e-commerce businesses. Learn how to customize the Account page, add features, and get help with technical issues.</p> */}
                    {/* <Button className="py-3 px-5 d-block">Get Started</Button> */}
                  </Col>
                </Row>
              </div>
            </div>
            <div className="container">
              <div className="blg_grd_wrpr mb-5">
                {/* <div className="grid-srchbr mb-5">
                <SearchBar onSearch={setSearchTerm} />
                
                </div> */}
                {/* <hr className="mb-3 mt-5"/> */}

                {blogFound ? (
                  <Row>
                    {filteredBlogs.map((items, index) => (
                      <Col
                        lg={4}
                        index={index}
                        className="mb-5 col-md-6 col-sm-6"
                        key={index}
                      >
                        <div className="main-blg-grd-wraper-container">
                          <Link to={items.Link} className="blog-link-unstyle">
                            {/* <Image src={items.BlogImage} alt="blog-image" /> */}
                            <LazyLoadedImage
                              src={items.BlogImage}
                              alt="Image 1"
                            />
                          </Link>
                          <div className="grid-aftrimg-contnt py-4 px-4">
                            <div className="blg-dttm fw-600 mb-3">
                              <span>{items.WatchIcon}</span>
                              <span>{items.Date}</span>
                            </div>
                            <Link to={items.Link} className="blog-link-unstyle">
                              <h5 className="blg-grd-hdng mb-3 fw-600 v">
                                {items.Heading}
                              </h5>
                            </Link>
                            <div className="blg-grd-contnt fw-600 mb-3">
                              <span>{items.Content.slice(0, 50)}...</span>
                            </div>
                            <div className="blg-grd-lnk">
                              <Link to={items.Link}>Read More</Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <div className="text-center blg-not-found">
                    <h2 className="mt-5 mb-5">No blogs found</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <StartFree /> */}
        <Readytry/>
      </main>
    </>
  );
}

export default BlogsGrid;
