import React from 'react';
import multiLanguage from '../Assets/Images/NewDataImages/Multi Languages Support.png'
import { Image } from 'react-bootstrap';


export function TabsSection3() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="multiLanguage__support">
          <Image src={multiLanguage}></Image>
        </div>
      </div>
    </>
    )
  }