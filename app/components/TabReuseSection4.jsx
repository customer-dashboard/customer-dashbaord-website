import RevaPanala from '../assets/images/NewDataImages/Revamp panel.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabReuseSection4() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="reva__panal__image">
        <LazyLoadedImage src={RevaPanala} alt="Tab Images" />
        </div>
      </div>
    </>
    )
  }