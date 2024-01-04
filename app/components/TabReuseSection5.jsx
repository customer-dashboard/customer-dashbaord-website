import ShowRecentlyImage from '../assets/images/NewDataImages/Showcase recently visited products.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabReuseSection5() {
    return (
      <>
      <div className="tab_dynamic_content">
        <div className="show__recently__image">
        <LazyLoadedImage src={ShowRecentlyImage} alt="Tab Images" />
        </div>
      </div>
    </>
    )
  }