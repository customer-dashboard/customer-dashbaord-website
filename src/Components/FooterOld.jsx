import React from 'react';
import '../Assets/css/Footer.css';
import footer_customer_dashboard_logo from '../Assets/Images/Footer_Logo.png';
import { Image } from 'react-bootstrap';
import normal_logo from '../Assets/Images/footer_shopify.png';
import shopify_logo_plus from '../Assets/Images/footer_shopify_plus.png';


function Footer() {
  return (
    <>

      <footer class="text-center text-lg-start bg-light-dark text-muted">


        <section class="my_footer">
          <div class="container text-center text-md-start mt-1 pt-3 pb-3">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 col-sm-3">
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="#"><Image src={footer_customer_dashboard_logo}></Image></a>
                </h6>
                <p>
                  This creates a convenient andversatile customer account page,
                  allowing customers to fully customize
                  their experience and merchants to
                  easily manage their store's look and feel.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 col-sm-3">
                <h6 class="text-uppercase fw-bold mb-4">
                  SUPPORT
                </h6>
                <p>
                  <a href="#!" class="text-reset">Most importants FAQs</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">ALl FAQs</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Blog</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Contact Us</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">About Us</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 col-sm-3">
                <h6 class="text-uppercase fw-bold mb-4">
                  EORK WITH US
                </h6>
                <p>
                  <a href="#!" class="text-reset">Integration</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Become a Partner</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Careers</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 col-sm-3">
                <Image src={normal_logo}></Image>
                <Image src={shopify_logo_plus}></Image>
                <div className="shopify">
                  <Button href="#" className="d-flex s_btn btns justify-content-evenly">
                    <Image src={shopify_logo}></Image>
                    <div className="btn_details">
                      <span className="span_1 banner-span">INSTALL FROM THE </span>
                      <span className="span_2 banner-span">Shopify App Store</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4" >
          © 2021 Copyright:

        </div>
      </footer>

    </>
  )
}

export default Footer