import React from 'react'
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
export function FaqItem4() {
  return (
   <>
   
   <Accordion.Item eventKey="4" className="mb-3 mt-3">
                                <Accordion.Header>4. How to activate Top ordered products in your menu?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title">
                                          <p>A. Top ordered products will be off by default. </p></div>    
                                         <div className="manu_builder_list_steps">
                                         
                                          <p>B. To turn it on, go to the <strong>Top ordered products</strong> menu in the Customer Dashboard app menu.</p> 
                                          <Image src='https://mandasa1.b-cdn.net/customer-dashbaord-pro/top-ordered-products-step-1.gif'></Image>
                                        </div>
                                        <div>
                                          <br></br>
                                        <p>C. After clicking on the <strong>Top ordered products</strong> button, you can see its preview along with it, here you can also make other settings, after this click on the save button to save it and check it by going to the <strong>Menu builder</strong>.</p>
                                        <Image src='https://mandasa1.b-cdn.net/customer-dashbaord-pro/top-ordered-products-step-2.gif'></Image>
                                        </div>
                                       
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
   
   </>
  )
}

