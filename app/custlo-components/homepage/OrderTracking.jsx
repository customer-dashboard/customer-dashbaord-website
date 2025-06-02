import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import shopifyOfficialLogoBlack from '../../assets/images/ofiicialBlackShopifyLogo.png';
import parse from 'html-react-parser';


function OrderTracking() {
    const DiamondIcon = (
  <svg
    height="22px"
    width="22px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 58 58"
    xml:space="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <polygon
        style={{ fill: "#3BB6B6" }}
        points="29,55 0,19 58,19 "
      ></polygon>{" "}
      <polygon
        style={{ fill: "#3BB6B6" }}
        points="58,19 0,19 10,3 48,3 "
      ></polygon>{" "}
      <polygon
        style={{ fill: "#3BB6B6" }}
        points="42.154,19 48,3 10,3 15.846,19 "
      ></polygon>{" "}
      <polygon style={{ fill: "#3BB6B6" }} points="42,19 29,3 16,19 "></polygon>{" "}
      <polygon
        style={{ fill: "#3BB6B6" }}
        points="15.846,19 29,55 42.154,19 "
      ></polygon>{" "}
    </g>
  </svg>
);
  return (
    <section className="image_with_text_new">
      <div className="banner_background pt-0">
        <Container>
          <Row className="align-items-center mt-4">
            <Col lg={5} className="banner_left_new">
              <div className='image_with_text_new_heading mb-3'>
                <h2 className='font-alverata-normal'>
                    Effortless <span className='gradient-text'> order tracking </span>with interactive map
                </h2>
              </div>
              <div className="image_with_text_features">
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Visual Order Progress:</strong> Track order status with an intuitive graphical timeline.")}
                    </div>
                  </div>
                </div>
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Interactive Shipping Map:</strong> View precise customer shipping addresses on a dynamic map.")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-section-btn">
                <a className='universal-btn featurs-img-btn' href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="noopener noreferrer">
                 <Image width="100%" src={shopifyOfficialLogoBlack} title="Find us on the Shopify app store" alt="Shopify app store logo" />
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="shopify_video banner_video hero-banner-image">
                <Image
                  loading='lazy'
                  title="profile fields in new customer account with Customer Dashboard Pro"
                  src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/55555.png"
                  alt="profile fields in new customer account with Customer Dashboard Pro"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default OrderTracking;
