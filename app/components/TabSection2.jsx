
import color_picker from '../assets/images/color-picker.png';
import color_lists from '../assets/images/color-lists.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';
export function TabSection2() {
    return (
      <>
        <div className="tab_dynamic_content">
          <div className="color-list">
          <LazyLoadedImage src={color_lists} alt="Tab Images" />
          </div>
          <div className="color-picker">
          <LazyLoadedImage src={color_picker} alt="Tab Images" />
          </div>
        </div>
      </>
    )
  }