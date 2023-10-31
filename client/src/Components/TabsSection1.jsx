import React from 'react';
import dynamicManuBuilder from '../Assets/Images/NewDataImages/Dynamic Menu Builder.png';
import { Image } from 'react-bootstrap';


export function TabsSection1() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="dynamic__menu_builder">
          <Image src={dynamicManuBuilder}></Image>
        </div>
      </div>
    </>
    )
  }