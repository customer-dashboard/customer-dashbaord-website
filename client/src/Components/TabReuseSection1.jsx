import React from 'react'
import small_form from '../Assets/Images/Small_Form.png';
import medium_form from '../Assets/Images/Medium_From.png';
import large_form from '../Assets/Images/Large_form.png';
import { Image } from 'react-bootstrap';
export function TabReuseSection1() {

    return (
            <>
              <div className="tab_dynamic_content">
                <div className="color-list large_form">
                  <Image src={large_form}></Image>
                </div>
                <div className="color-picker small_form">
                  <Image src={small_form}></Image>
                </div>
                <div className="color-picker medium_form">
                  <Image src={medium_form}></Image>
                </div>
              </div>
            </>
          );
  
}
