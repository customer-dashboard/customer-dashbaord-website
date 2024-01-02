import { Form, useActionData } from "@remix-run/react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";

function successMessage() {
  return (
      <div className='success-message mb-4 mt-5'>
          <div className="green-circle"></div>
          <p>Thank you for submitting the form. Your data has been received and processed successfully.</p>
          {/* You can add additional information or links here as needed */}
      </div>
  );
}


function ContactUs() {
  const [isSubmited, setIsSubmited] = useState(false);
  const formActionData = useActionData();
  const form = useRef(null);
   useEffect(() => {
     if (formActionData?.ok) {
       form.current?.reset();
       setIsSubmited(true);
     }
   }, [formActionData])
  return (
    <>
      <section className="contact-us-page-manu">
        <div className="container">
          <div className="contact-us-page-container">
            <div className="contact-us-page-title manu-page-title">
              <h1 className="page-title">Contact Us</h1>
            </div>
            {
              isSubmited ? (successMessage()) : ''
            }

            <Row className="justify-content-center">
              <Col lg={8} className="col-md-8">
                <Form method="post" ref={form}>
                  <Row className="mb-3">
                    <Col lg={6}>
                      <label name="firstName" id="firstName">
                        FirstName*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        className="form-input-feild first-name-field"
                      />
                      {formActionData?.errors?.firstName ? (
                        <em>{formActionData?.errors.firstName}</em>
                      ) : null}
                    </Col>
                    <Col lg={6}>
                      <label name="lastName" id="lastName">
                        LastName*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        className="form-input-feild first-name-field"
                      />
                      {formActionData?.errors?.lastName ? (
                        <em>{formActionData?.errors.lastName}</em>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={12}>
                      <label name="email" id="email">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className="form-input-feild first-name-field"
                      />
                      {formActionData?.errors?.email ? (
                        <em>{formActionData?.errors.email}</em>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={12}>
                      <label name="message" id="message">
                        Message*
                      </label>
                      {/* <input
                        type="textarea"
                        rows={4}
                        name="message"
                        className="form-input-feild first-name-field"
                      /> */}
                      <textarea
                      type="textarea"
                      rows={4}
                      name="message"
                      placeholder="Message*"
                      className="form-input-feild first-name-field"
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

export default ContactUs;
