import MultiLanguageCapability from '../assets/images/NewDataImages/Multi address capability.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabReuseSection3() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="multi__address_capability">
        <LazyLoadedImage src={MultiLanguageCapability} alt="Tab Images" />
      
        </div>
      </div>
    </>
    )
  }