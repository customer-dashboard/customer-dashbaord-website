import React from "react";
import large_form_2 from '../Assets/Images/large_form_2.png';
import date_of_birth_form from '../Assets/Images/date_of_birth_from.png';
import gender_form from '../Assets/Images/gender_form.png';
import hobbeis_form from '../Assets/Images/Hobbies_form.png';
import { Image } from "react-bootstrap";

export function TabReuseSection6() {
    return (
      <>
        <div className="tab_dynamic_content">
          <div className="color-list">
            <Image src={large_form_2}></Image>
          </div>
          <div className="color-picker section_2_color_picker hobbies_from">
            <Image src={hobbeis_form}></Image>
          </div>
          <div className="color-picker section_2_color_picker gender_form">
            <Image src={gender_form}></Image>
          </div>
          <div className="color-picker section_2_color_picker date_of_birth_form">
            <Image src={date_of_birth_form}></Image>
          </div>
        </div>
      </>
    );
  }