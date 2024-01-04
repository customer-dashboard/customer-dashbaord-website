import multilanguage from '../assets/images/NewDataImages/Multi Languages Support.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabsSection3() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="multiLanguage__support">
          <LazyLoadedImage src={multilanguage} alt="Tab Images" />
        </div>
      </div>
    </>
    )
  }