import React from "react";
import large_form_2 from '../assets/images/large_form_2.png';
import date_of_birth_form from '../assets/images/date_of_birth_from.png';
import gender_form from '../assets/images/gender_form.png';
import hobbeis_form from '../assets/images/Hobbies_form.png';
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