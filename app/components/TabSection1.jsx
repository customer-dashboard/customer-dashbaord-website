import dynamicManuBuilder from '../assets/images/NewDataImages/Dynamic Menu Builder.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabsSection1() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="dynamic__menu_builder">
          <LazyLoadedImage src={dynamicManuBuilder} alt="Tab Images" />
        </div>
      </div>
    </>
    )
  }