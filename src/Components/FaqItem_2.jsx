import React from 'react';
import { Accordion } from 'react-bootstrap';
import {Image} from 'react-bootstrap';

export function FaqItem_2() {
  return (
    <>
    
    <Accordion.Item eventKey="1" className="mb-3 mt-3">
                                <Accordion.Header>What to do if the Customer Dashboard Pro App is not working on your account page.</Accordion.Header>
                                <Accordion.Body>
                                    <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title"><span>There's 2 reasons this can happen:</span></div>    
                                            <p>1: Your store might be using a custom theme which just means our app got a little confused and wasn't able to find a place to hook onto. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you.</p>
                                            <p>2: You might have (or previously had) another customer account app' installed that when uninstalled, left behind a bit of a mess of code. No worries though, just email us at support@customerdashboard.pro and let us know your store address and that after installation you can't see our app being displayed and we'll request access and get it all fixed up for you.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
    

    </>
  )
}

