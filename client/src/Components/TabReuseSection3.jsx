import React from 'react';
import MultiLanguageCapability from '../Assets/Images/NewDataImages/Multi address capability.png';
import { Image } from 'react-bootstrap';


export function TabReuseSection3() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="multi__address_capability">
          <Image src={MultiLanguageCapability}></Image>
        </div>
      </div>
    </>
    )
  }