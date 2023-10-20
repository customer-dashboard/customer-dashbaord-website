import React from 'react'
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import manu_builder_image from '../Assets/Images/manu_builder.png';

export function FaqItem4() {
  return (
   <>
   
   <Accordion.Item eventKey="4" className="mb-3 mt-3">
                                <Accordion.Header>How to add a Shopify Page to your Menu ?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title"><span>Follow this guide to add one or more page links to your customer account menu.</span></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong>"Menu Builder"</strong> from menus.</li>
                                            <li>Click <strong>add Shopify Page.</strong></li>
                                            <li>Click on <strong>edit</strong> to change page or edit menu text.</li>
                                            <li>When you are done, click on save and your new <strong>Shopify Page</strong> will be added to the customer account page.</li>
                                        </ol> 
                                        </div>
                                        <Image src={manu_builder_image}></Image>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
   
   </>
  )
}

