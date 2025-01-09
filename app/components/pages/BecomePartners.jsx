import { Form, useActionData } from "@remix-run/react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { Modal } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { AppProvider, Button } from "@shopify/polaris";

function BecomePartners(props) {
  const { fieldType, handleFieldChange, formActionData } = props;
  return (
    <>
      <section className="contact-us-page-manu">
        <div className="container">
          <div className="contact-us-page-container">
            <div className="contact-us-page-title manu-page-title">
              <h2 className="page-title partner-form-title">
                Become a Partner
              </h2>
            </div>

            <Row className="justify-content-center">
              <Col lg={8} className="col-md-8">
                <Form method="post">
                  <Row className="mb-3">
                    <Col lg={6}>
                      <label htmlFor="firstName" id="firstName">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="form-input-feild first-name-field"
                        value={fieldType.name}
                        onChange={(e) =>
                          handleFieldChange("name", e.target.value)
                        }
                      />
                      {formActionData?.errors?.firstName ? (
                        <em>{formActionData?.errors.firstName}</em>
                      ) : null}
                    </Col>
                    <Col lg={6}>
                      <label htmlFor="websiteName" id="websiteName">
                        Website Url*
                      </label>
                      <input
                        type="text"
                        name="url"
                        placeholder="customerdashboard.pro*"
                        className="form-input-feild first-name-field"
                        value={fieldType.url}
                        onChange={(e) =>
                          handleFieldChange("url", e.target.value)
                        }
                      />
                      {formActionData?.errors?.websiteName ? (
                        <em>{formActionData?.errors.websiteName}</em>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col lg={6}>
                      <label htmlFor="email" id="email">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className="form-input-feild first-name-field"
                        value={fieldType.email}
                        onChange={(e) =>
                          handleFieldChange("email", e.target.value)
                        }
                      />
                      {formActionData?.errors?.email ? (
                        <em>{formActionData?.errors.email}</em>
                      ) : null}
                    </Col>
                    <Col lg={6}>
                      <label htmlFor="chooseType" id="chooseType">
                        Choose Type*
                      </label>
                      <select
                        name="type"
                        className="form-input-feild first-name-field"
                        value={fieldType.type}
                        onChange={(e) =>
                          handleFieldChange("type", e.target.value)
                        }
                      >
                        <option value="Shopify App">Shopify App</option>
                        <option value="Agency">Agency</option>
                        <option value="Blogger">Blogger</option>
                        <option value="Influencer">Influencer</option>
                        <option value="Other">Other</option>
                      </select>
                      {formActionData?.errors?.type ? (
                        <em>{formActionData?.errors.type}</em>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <label htmlFor="message" id="message">
                        Additional Information*
                      </label>
                      <textarea
                        name="info"
                        rows={4}
                        placeholder="Hey Customer Dashboard Pro,Let’s explore partnership opportunities*"
                        className="form-input-feild first-name-field"
                        value={fieldType.info}
                        onChange={(e) =>
                          handleFieldChange("info", e.target.value)
                        }
                      />
                      {formActionData?.errors?.message ? (
                        <em>{formActionData?.errors.message}</em>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className="my-4">
                      <button className="header_btn submit-btn form-submit-button contact-form-button">
                        Submit
                      </button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default BecomePartners;
