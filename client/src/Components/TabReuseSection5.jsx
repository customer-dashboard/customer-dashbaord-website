import React from 'react';
import ShowRecentlyImage from '../Assets/Images/NewDataImages/Showcase recently visited products.png';
import { Image } from 'react-bootstrap';


export function TabReuseSection5() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="show__recently__image">
          <Image src={ShowRecentlyImage}></Image>
        </div>
      </div>
    </>
    )
  }