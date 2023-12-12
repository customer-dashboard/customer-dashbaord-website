import React from 'react';
import RevaPanala from '../assets/images/NewDataImages/Revamp panel.png';
import { Image } from 'react-bootstrap';


export function TabReuseSection4() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="reva__panal__image">
          <Image src={RevaPanala}></Image>
        </div>
      </div>
    </>
    )
  }