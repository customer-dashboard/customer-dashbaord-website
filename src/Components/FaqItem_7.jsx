import React from 'react'
import toggle_feature from '../Assets/Images/toggle_feature.png';
import { Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
export function FaqItem_7() {
  return (
    <>
     <Accordion.Item eventKey="7" className="mb-3 mt-3">
                                <Accordion.Header>How to turn on/off Customer Dashboard Pro Features.</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong>"Toggle features"</strong> from menus.</li>
                                            <li>Select the feature you want to enable or disable and click button next to it to toggle on or off.</li>
                                            <li>Save changes.</li>
                                        </ol> 
                                      
                                        </div>
                                        <Image src={toggle_feature}></Image>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>
    </>
  )
}

