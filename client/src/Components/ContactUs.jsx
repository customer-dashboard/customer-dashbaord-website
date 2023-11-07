import React from 'react'
import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../Assets/css/ContactUs.css';

function ContactUs({ title }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmited, setIsSubmited] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        message: '',
    });

    function successMessage() {
        return (
            <div className='success-message mb-4 mt-5'>
                <div className="green-circle"></div>
                <p>Thank you for submitting the form. Your data has been received and processed successfully.</p>
                {/* You can add additional information or links here as needed */}
            </div>
        );
    }

    const [formErrors, setFormErrors] = useState({});
    //   const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const validateForm = () => {
        const errors = {};

        if (!formData.FirstName.trim()) {
            errors['FirstName'] = 'FirstName is required';


        }
        else if (formData.FirstName.trim().length < 3) {
            errors['FirstName'] = 'FirstName is to Short';
        }

        if (!formData.LastName.trim()) {
            errors['LastName'] = 'LastName is required';
        }
        else if (formData.LastName.trim().length < 3) {
            errors['LastName'] = 'LastName is to Short';
        }
        if (!formData.email.trim()) {
            errors.email = ' email is required';
        }

         else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email.trim())) {
            errors.email = 'Invalid Email';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';

        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmited(true);
            setFormData({
                FirstName: '',
                LastName: '',
                email: '',
                message: '',
            })
            await fetch("/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({
                    formData
                })

            });
        };
    }



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Contact us for more information" />
                <meta property="og:title" content="Contact us - Customer-Dashboard-Pro Contact us" />
                <meta property="og:description" content="Contact Us Og Description" />
            </Helmet>
            <section className='contact-us-page-manu'>
                <div className='container'>
                    <div className='contact-us-page-container'>
                        <div className='contact-us-page-title manu-page-title'>
                            <h1 className='page-title'>Contact Us</h1>
                        </div>
                        <div className='page-content contact-us-page-content'>
                            {
                                isSubmited ? (successMessage()) : ''
                            }
                            <Row className='justify-content-center'>
                                <Col lg={8} className='col-md-8'>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group>
                                                    <Form.Label className='my-2 form-input-label'>First Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="FirstName"
                                                        value={formData.FirstName}
                                                        onChange={handleChange}
                                                        isInvalid={formErrors.FirstName}
                                                        className='form-input-feild first-name-field'
                                                    />
                                                    <Form.Control.Feedback type="invalid">{formErrors.FirstName}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group>
                                                    <Form.Label className='my-2  form-input-label'>Last Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="LastName"
                                                        value={formData.LastName}
                                                        onChange={handleChange}
                                                        isInvalid={formErrors.LastName}
                                                        className='form-input-feild first-name-field'
                                                    />
                                                    <Form.Control.Feedback type="invalid">{formErrors.LastName}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group>
                                                    <Form.Label className='my-2 form-input-label'>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        isInvalid={formErrors.email}
                                                        pattern='pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|in|info)$"'
                                                        className='form-input-feild first-name-field'
                                                    />
                                                    <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group>
                                                    <Form.Label className='my-2 form-input-label'>Message</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={4}
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        isInvalid={formErrors.message}
                                                        className='form-input-feild first-name-field'
                                                    />
                                                    <Form.Control.Feedback type="invalid">{formErrors.message}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={12} className='my-4'>
                                                <Button type="submit" className='submit-btn form-submit-button contact-form-button'>
                                                    Submit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs