import React from 'react'
import { Accordion } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import ThirdFirstImage from '../Assets/Images/FAQ___Images/3FaqFirst.png';
import ThirdSecondImage from '../Assets/Images/FAQ___Images/3rdfaqSecond.png';

 export function FaqItem_3() {
  return (
<>

<Accordion.Item eventKey="3" className="mb-3 mt-3">
                                <Accordion.Header>How to add a link and page to your Menu ?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title">
                                          <p>To add one or more menus to your customer account, follow this guide:</p></div>    
                                         <div className="manu_builder_list_steps">
                                         <ol>
                                            <li>Select <strong> "Menu"</strong> from the Menu builder.</li>
                                            <li>Then, click on the <strong>"Add menu item"</strong> button.</li>
                                            <li>Choose the type of menu you want to add.</li>
                                            <li>After selecting the menu type, save your changes, and the menu will be added to your menu.</li>
                                        </ol> 
                                        </div>
                                        <div>
                                        <Image src={ThirdFirstImage}></Image>
                                        </div>
                                        <div>
                                          <Image src={ThirdSecondImage}></Image>
                                        </div>
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>

</>

)
}
