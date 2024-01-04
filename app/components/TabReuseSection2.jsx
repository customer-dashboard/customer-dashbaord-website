import HaselFreeImage from '../assets/images/NewDataImages/Hassle-free reorder.png';
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';
 export function TabReuseSection2() {
  return (
    <>
    <div className="tab_dynamic_content">
      <div className="hasel__free_image">
        <LazyLoadedImage src={HaselFreeImage} alt="Tab Images" />
      </div>
    </div>
  </>
  )
}

