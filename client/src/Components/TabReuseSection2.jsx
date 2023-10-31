import React from 'react'
import '../Assets/css/TabReuseSection.css';
import HaselFreeImage from '../Assets/Images/NewDataImages/Hassle-free reorder.png';
import { Image } from 'react-bootstrap';

 export function TabReuseSection2() {
  return (
    <>
    <div className="tab_dynamic_content">
      <div className="hasel__free_image">
        <Image src={HaselFreeImage}></Image>
      </div>
    </div>
  </>
  )
}

