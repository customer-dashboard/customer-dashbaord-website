import React from "react";
import { Col, Row } from "react-bootstrap";

function HomePlan() {
  return (
    <>
      <section className="home-page-pricing-camp">
        <div className="main-page-pricing py-5">
        <div className="container">
            <div className="mb-5">
                <h2 className="text-center">Features</h2>
            </div>
          <Row>
            <Col lg={6}>
              <div class="plan basic">
                <h3>New Customer Account</h3>
                <ul>
                  <li class="tick">
                    <span></span>Manage profile & delivery address
                  </li>
                  <li class="tick">
                    <span></span>Text Banners
                  </li>
                  <li class="tick">
                    <span></span>Image Banner
                  </li>
                  <li class="tick">
                    <span></span>Customer Support Widget
                  </li>
                  <li class="tick">
                    <span></span>Testimonials
                  </li>
                  <li class="tick">
                    <span></span>Add extra page
                  </li>
                  <li class="tick">
                    <span></span>Custom field ( profile )
                  </li>
                  <li>
                    <span></span>Add extra tab
                  </li>
                  <li>
                    <span></span>Registration form
                  </li>
                  <li>
                    <span></span>Image Upload
                  </li>
                  <li class="tick">
                    <span></span>Integration engineer
                  </li>
                  <li class="tick">
                    <span></span>Third party app integration with account page
                  </li>
                  <li >
                    <span></span>Recently viewed products
                  </li>
                    <li class="tick">
                    <span></span>ReOrder
                  </li>
                    <li >
                    <span></span>Contact form in order history
                  </li>
                    <li class="tick">
                    <span></span>Multi language
                  </li>
                    <li class="tick">
                    <span></span>Profile page
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div class="plan premium">
                <h3>Legacy Customer Account</h3>
               <ul>
                  <li class="tick">
                    <span></span>Manage profile & delivery address
                  </li>
                  <li>
                    <span></span>Text Banners
                  </li>
                  <li >
                    <span></span>Image Banner
                  </li>
                  <li>
                    <span></span>Customer Support Widget
                  </li>
                  <li>
                    <span></span>Testimonials
                  </li>
                  <li class="tick">
                    <span></span>Add extra page
                  </li>
                  <li class="tick">
                    <span></span>Custom field ( profile )
                  </li>
                  <li class="tick">
                    <span></span>Add extra tab
                  </li>
                  <li class="tick">
                    <span></span>Registration form
                  </li>
                  <li class="tick">
                    <span></span>Image Upload
                  </li>
                  <li class="tick">
                    <span></span>Integration engineer
                  </li>
                  <li class="tick">
                    <span></span>Third party app integration with account page
                  </li>
                  <li class="tick">
                    <span></span>Recently viewed products
                  </li>
                    <li class="tick">
                    <span></span>ReOrder
                  </li>
                    <li class="tick">
                    <span></span>Contact form in order history
                  </li>
                    <li class="tick">
                    <span></span>Multi language
                  </li>
                    <li class="tick">
                    <span></span>Profile page
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      </section>
    </>
  );
}

export default HomePlan;
