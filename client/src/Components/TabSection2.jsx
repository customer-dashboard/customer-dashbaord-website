
import React from "react"
import color_picker from '../Assets/Images/color-picker.png';
import color_lists from '../Assets/Images/color-lists.png';
import { Image } from "react-bootstrap"

export function TabSection2() {
    return (
      <>
        <div className="tab_dynamic_content">
          <div className="color-list">
            <Image src={color_lists}></Image>
          </div>
          <div className="color-picker">
            <Image src={color_picker}></Image>
          </div>
        </div>
      </>
    )
  }