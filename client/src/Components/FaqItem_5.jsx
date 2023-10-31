import React from 'react'
import manu_builder_image from '../Assets/Images/manu_builder.png';
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
export function FaqItem_5() {
  return (
    <>
     <Accordion.Item eventKey="6" className="mb-3 mt-3">
                                <Accordion.Header>How to change color palette of customer account page to match it with your brand color.</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title"><span>Follow this guide to change your customer account page colors.You can change colors of account page according to your requirement.</span></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Go to settings.</li>
                                            <li>Select Typography and color.</li>
                                        </ol> 
                                      
                                        </div>
                                        <Image src={manu_builder_image}></Image>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
    </>
  )
}

