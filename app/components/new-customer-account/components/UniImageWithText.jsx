import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import parse from "html-react-parser";
import shopifyOfficialLogoBlack from "../../../assets/images/ofiicialBlackShopifyLogo.png";

function UniImageWithText({ data, showComponents }) {
  return (
    <>
      <Container>
        {data.HeadingAvail ?  <div className="mt-4 mb-5 text-center"><h2>{parse(data.Heading)}</h2></div> : ''}
        {data.SideLeft ? (
          <Row className="align-items-center justify-content-between px-lg-5">
            <Col md="6">
              <Image
                src={data.Image}
                alt={data.ImageAlt}
                title={data.ImageAlt}
              />
            </Col>
            <Col md="5">
              <h2 className="mb-4">{parse(data.SubHeading)}</h2>
              {data.DescriptionList.map((item, index) => {
                return (
                  <div className="feature_item_box" key={index}>
                    <div className="d-flex column-gap-3">
                      <div className="feature_icon__">{data.Icon}</div>
                      <div className="feature_description_  mb-4">
                        {parse(item.node)}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="main_section_btn">
                <Row>
                  <Col
                    lg={5}
                    className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6"
                  >
                    <div className="shopify transition-duretion">
                      <Button
                        href="https://apps.shopify.com/customer-dashboard-pro"
                        target="_blank"
                        rel="norefferer"
                        className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black"
                      >
                        <Image
                          src={shopifyOfficialLogoBlack}
                          alt="Shopify-official-logo-black"
                        ></Image>
                      </Button>
                    </div>
                  </Col>
                  <Col
                    lg={5}
                    className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 "
                  >
                    <div className="transition-duretion banner_second_btn">
                      <a
                        target={showComponents ? "_blank" : ""}
                        href={
                          showComponents == "New Customer Account"
                            ? "https://shopify.com/73535684832/account"
                            : showComponents == "Classic Customer Account"
                            ? "https://customer-dashboard.myshopify.com"
                            : "#choose-customer-account-version"
                        }
                        className="btn header_btn btn btn-primary"
                      >
                        View Demo
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="align-items-center justify-content-between px-lg-5">
            <Col md="5">
            <h2 className="mb-4">{parse(data.SubHeading)}</h2>
              {data.DescriptionList.map((item, index) => {
                return (
                  <div className="feature_item_box" key={index}>
                    <div className="d-flex column-gap-3">
                      <div className="feature_icon__">{data.Icon}</div>
                      <div className="feature_description_  mb-4">
                        {parse(item.node)}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="main_section_btn">
                <Row>
                  <Col
                    lg={5}
                    className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6"
                  >
                    <div className="shopify transition-duretion">
                      <Button
                        href="https://apps.shopify.com/customer-dashboard-pro"
                        target="_blank"
                        rel="norefferer"
                        className="d-flex s_btn btns justify-content-evenly shopify-official-logo-black"
                      >
                        <Image
                          src={shopifyOfficialLogoBlack}
                          alt="Shopify-official-logo-black"
                        ></Image>
                      </Button>
                    </div>
                  </Col>
                  <Col
                    lg={5}
                    className="col-md-6 col-sm-6 my-md-4 my-sm-4 my-x-sm col-x-sm-6 "
                  >
                    <div className="transition-duretion banner_second_btn">
                      <a
                        target={showComponents ? "_blank" : ""}
                        href={
                          showComponents == "New Customer Account"
                            ? "https://shopify.com/73535684832/account"
                            : showComponents == "Classic Customer Account"
                            ? "https://customer-dashboard.myshopify.com"
                            : "#choose-customer-account-version"
                        }
                        className="btn header_btn btn btn-primary"
                      >
                        View Demo
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="6">
              <Image
                src={data.Image}
                alt={data.ImageAlt}
                title={data.ImageAlt}
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default UniImageWithText;
