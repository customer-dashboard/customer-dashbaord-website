import React from 'react'
import translation_first from '../Assets/Images/Transaltions-first.png';
import translation_second from '../Assets/Images/Translation-second.png';
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
export function FaqItem_6() {
  return (
    <>
     <Accordion.Item eventKey="5" className="mb-3 mt-3">
                                <Accordion.Header>How to add translations for customer account page.</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title"><span>Follow our guide to add translations for multi language stores.</span></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong>"Translations"</strong> from menus.</li>
                                            <li>Click on "Manage translations" of those language in which you want to add translations.</li>
                                            <li>Then you can change translations of all the word for another language.</li>
                                        </ol>                                    
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-md-6 col-lg-6">
                                            <Image src={translation_first}></Image>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                        <Image src={translation_second}></Image>
                                        </div>
                                        </div>
                                        
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
    </>
  )
}

