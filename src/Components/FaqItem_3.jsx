import React from 'react'
import index_3_image from '../Assets/Images/index_3_image.png';
import { Accordion } from 'react-bootstrap';
import {Image} from 'react-bootstrap';


 export function FaqItem_3() {
  return (
<>

<Accordion.Item eventKey="3" className="mb-3 mt-3">
                                <Accordion.Header>How to add a Custom Link to your Menu ?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title"><span>Follow this guide to add one or more page links to your customer account menu.</span></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong> "Menu Builder" </strong>tab</li>
                                            <li>Click <strong>add custom link</strong>.</li>
                                            <li>Click on <strong>edit</strong> and change the Menu Text and add your Link - be sure to include <strong>"https://"</strong> at the start of you link.</li>
                                            <li>When you are done, click on save and your new custom link will be added to the customer account page.</li>
                                        </ol> 
                                        </div>
                                        <Image src={index_3_image}></Image>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>

</>

)
}
