import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/css/Changelog.css';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

function ChangeLog() {
    const [state, setState] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        // // axios.get(`http://localhost:3001/get-changelog`)
        // //     .then(res => {
        // //         const data = res.data.data;
        // //         setState(data);
        // //         console.log(state);
        //     })
    }, []);

    const changelogdata = [
        {
            date: "20 november",
            data: [
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "New",
                    class: 'new_tag'

                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Improve",
                    class: 'improve_tag'
                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Feature",
                    class: 'feature_tag'
                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Fixed",
                    class: 'fixed_tag'
                }
            ]
        },
        {
            date: "21 november",
            data: [
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "New",
                    class: 'new_tag'

                }
            ]
        },
        {
            date: "22 november",
            data: [
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "New",
                    class: "new_tag"

                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Improve",
                    class: "improve_tag"

                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Feature",
                    class: 'feature_tag'
                },
                {
                    title: "title for new feature with shopify cuistomer dashboard app",
                    content: "description for new feature with shopify cuistomer dashboard app",
                    label: "Fixed",
                    class: 'fixed_tag'
                }
            ]
        }

    ]




    return (
        <>
            <Helmet>
                <title> Changelog Page Shopify App | Customer Dashboard Pro</title>
                <meta name="description" content="Latest changes and updates in Customer Dashboard Pro App Shopify." />
                <meta property="og:title" content="Changelog Page Shopify App | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Changelog Page Shopify App | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/pages/changelog"></meta>
                <meta property="og:description" content="Latest changes and updates in Customer Dashboard Pro App Shopify." />
            </Helmet>

            <section className='change-log-section'>
                <div className='change-log-file-main-container'>
                    <div className="changelog-main-heading">
                        <div className='container'>
                            <p>Changelog</p>
                            <h1>What’s New at Customer Dashboard Pro?</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="changelog-content">
                            <Row className='justify-content-center'>
                                <Col lg={12}>
                                    {
                                        changelogdata.map((item) => {
                                            return (
                                                <>

                                                    <div className='main-change-log-container'>
                                                        <h4 className='change-log-date'><span>{item.date}</span></h4>
                                                        <ul className='changelog-list-content'>
                                                            {
                                                                item.data.map((item1, index) => {
                                                                    return (
                                                                        <>
                                                                            <li>
                                                                                <div className='logchagne'>
                                                                                    <p className='changelog-tag-container'><span className={`chnagelog-tag ${item1.class === 'new_tag' ? 'new_tag' : ''} ${item1.class === 'improve_tag' ? 'improve_tag' : ''} ${item1.class === 'fixed_tag' ? 'fixed_tag' : ''} ${item1.class === 'feature_tag' ? 'feature_tag' : ''}`}>
                                                                                        {item1.label}</span></p>
                                                                                    <div className="changlog-mncntnt">
                                                                                        <h5>{item1.title}</h5>
                                                                                        <p className='changelog-description'>{item1.content}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </li>


                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>

                                                </>
                                            );
                                        })
                                    }
                                    {/* {state.map((content,index)=>parse(content.answer))} */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ChangeLog