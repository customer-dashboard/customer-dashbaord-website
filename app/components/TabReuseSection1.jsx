
import small_form from '../assets/images/Small_Form.png';
import medium_form from '../assets/images/Medium_From.png';
import large_form from '../assets/images/Large_form.png'; 
import LazyLoadedImage from './lazyLoadImage/LazyLoadImage';

export function TabReuseSection1() {

    return (
            <>
              <div className="tab_dynamic_content">
                <div className="color-list large_form">
                  {/* <Image src={large_form}></Image> */}
                  <LazyLoadedImage src={large_form} alt="Tab Images" />
                </div>
                <div className="color-picker small_form">
                  {/* <Image src={small_form}></Image> */}
                  <LazyLoadedImage src={small_form} alt="Tab Images" />
                </div>
                <div className="color-picker medium_form">
                  {/* <Image src={medium_form}></Image> */}
                  <LazyLoadedImage src={medium_form} alt="Tab Images" />
                </div>
              </div>
            </>
          );
  
}
