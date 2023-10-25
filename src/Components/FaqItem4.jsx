import React from 'react'
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import ForthFirstImage from '../Assets/Images/FAQ___Images/ForthFirstImage.png';
import ForthSecondImage from '../Assets/Images/FAQ___Images/ForthSecondImage.png';
export function FaqItem4() {
  return (
   <>
   
   <Accordion.Item eventKey="4" className="mb-3 mt-3">
                                <Accordion.Header>How to add a profile fields to your profile page?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title">
                                          <p>To add one or more fields to your customer account profile, follow this guide:</p></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong>"Profile"</strong> from the profile setup.</li>
                                            <li>Then, click on the <strong>"Add extra field" button.</strong></li>
                                            <li>Choose the type of field you want to add, such as Single line, Multiline, Date, Single choice options, or Multiple choice options.</li>
                                            <li>After selecting the field type, save your changes, and the fields will be added to your profile.</li>
                                        </ol> 
                                        </div>
                                        <div>
                                        <Image src={ForthFirstImage}></Image>
                                        </div>
                                        <div>
                                          <Image src={ForthSecondImage}></Image>
                                        </div>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
   
   </>
  )
}

