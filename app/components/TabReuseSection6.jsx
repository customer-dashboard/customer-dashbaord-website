import large_form_2 from '../assets/images/large_form_2.png';
import date_of_birth_form from '../assets/images/date_of_birth_from.png';
import gender_form from '../assets/images/gender_form.png';
import hobbeis_form from '../assets/images/Hobbies_form.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabReuseSection6() {
    return (
      <>
        <div className="tab_dynamic_content">
          <div className="color-list">
        <LazyLoadedImage src={large_form_2} alt="Tab Images" />
          </div>
          <div className="color-picker section_2_color_picker hobbies_from">
        <LazyLoadedImage src={hobbeis_form} alt="Tab Images" />
          </div>
          <div className="color-picker section_2_color_picker gender_form">
        <LazyLoadedImage src={gender_form} alt="Tab Images" />
          </div>
          <div className="color-picker section_2_color_picker date_of_birth_form">
        <LazyLoadedImage src={date_of_birth_form} alt="Tab Images" />
          </div>
        </div>
      </>
    );
  }