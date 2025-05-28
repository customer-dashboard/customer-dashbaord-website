import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import shopifyOfficialLogoBlack from '../../assets/images/ofiicialBlackShopifyLogo.png';
import parse from 'html-react-parser';


function CustomFields() {
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
                  <span className='gradient-text'>Custlo</span> simplify shopify <span className='gradient-text'>profile fields </span>
                </h2>
              </div>
              <div className="image_with_text_features">
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Simplified Profile Management:</strong> Customize and collect detailed customer information effortlessly.")}
                    </div>
                  </div>
                </div>
                <div className="feature_item_box">
                  <div className="d-flex column-gap-3">
                    <div className="feature_icon__">
                      {DiamondIcon}
                    </div>
                    <div className="feature_description_ mb-4">
                      {parse("<strong>Enhanced Personalization:</strong> Build richer profiles to boost engagement and drive revenue.")}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="main_section_btn">
                <Row>
                  <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6">
                    <div className="shopify transition-duretion">
                      <Button
                        href="https://apps.shopify.com/customer-dashboard-pro"
                        target="_blank"
                        rel="norefferer"
                        className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black"
                      >
                        <Image src={shopifyOfficialLogoBlack} alt="Shopify-official-logo-black" />
                      </Button>
                    </div>
                  </Col>
                  <Col lg={5} className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 ">
                    <div className='transition-duretion banner_second_btn'>
                      <a
                        target='_blank'
                        href="https://shopify.com/73535684832/account"
                        className="btn header_btn btn btn-primary"
                      >
                        View Demo
                      </a>
                    </div>
                  </Col>
                </Row>
              </div> */}
              <div className="main-section-btn">
                <a className='universal-btn featurs-img-btn' href="http://" target="_blank" rel="noopener noreferrer">
                 <Image width="100%" src={shopifyOfficialLogoBlack} title="Find us on the Shopify app store" alt="Shopify app store logo" />
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="shopify_video banner_video hero-banner-image">
                <Image
                  loading='lazy'
                  title="profile fields in new customer account with Customer Dashboard Pro"
                  src="https://mandasa1.b-cdn.net/CustLo/Home%20Page%20Images/custome%20feaild.png"
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

export default CustomFields;
