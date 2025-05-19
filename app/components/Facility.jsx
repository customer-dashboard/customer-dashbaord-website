import { Col, Container, Image, Row } from "react-bootstrap";
import One_Star_Image from "../assets/images/One_Star_Image.png";
import Beard_Man from "../assets/images/Beard_man.png";
import LazyLoadedImage from "./lazyLoadImage/LazyLoadImage";
function Facility() {
  return (
    <>
      <section className="facility">
        <div className="facility_group">
          <Container>
            <div className="show_facility_content">
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="Beard_man_image_1">
                    <LazyLoadedImage
                      src={
                        "https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/Beard_man-QCTGQINU01.png"
                      }
                      alt="why install customer dashboard pro "
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="Beard_man_image">
                    <LazyLoadedImage
                      src={
                        "https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/Beard_man-QCTGQINU01.png"
                      }
                      alt="install customer account app"
                    />
                  </div>
                  <div className="why_install why-install-data-container">
                    <h2 className="section_heading">
                      WHY <span className="new_color">INSTALL?</span>
                    </h2>
                    <ul>
                      <li>
                        <span>
                          <strong>
                            ✨ Seamless Experience for Every Customer
                          </strong>
                          <br />
                          Support both Classic and New Shopify Customer Accounts
                          with a unified, modern interface.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>🛍️ Personalized Shopping at Its Best</strong>
                          <br />
                          Boost engagement and conversions with AI Upsell
                          Offers, Recently Viewed, and Top Ordered Products.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>📣 Promote More, Better</strong>
                          <br />
                          Use banners, testimonials, trust badges, and quotes to
                          deliver key messages and build confidence.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>📇 Custom Profiles & Feedback</strong>
                          <br />
                          Capture rich customer data with custom fields,
                          registration forms, and feedback surveys.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>🔁 Empower Customer Self-Service</strong>
                          <br />
                          Let customers cancel orders, change passwords, and
                          reorder with ease—right from their dashboard.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>🧭 Flexible Navigation</strong>
                          <br />
                          Fully customize dashboard layout and menu structure
                          with easy-to-use design tools.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>🌐 Multilingual & Secure</strong>
                          <br />
                          Let customers choose their preferred language and
                          enjoy a safe, secure experience throughout.
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>🧩 Integrate & Extend Easily</strong>
                          <br />
                          Seamlessly connect with third-party tools like
                          rewards, wishlists, and loyalty apps to enhance the
                          customer journey.
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Facility;
