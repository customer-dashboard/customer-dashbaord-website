import React from 'react';
import { reOrderPageData } from '../middleware/PageTopSectionData';
import PagesTopSection from './PageTopSection';
import { useEffect } from 'react';
import Aos from 'aos';
import ImageWithText from './ImageWithText';
import FeaturedContent from '../components/FeaturedContent';
import { dataOfReOrderPageImageWithText } from '../middleware/ImageWithTextData';
import PagesComparison from '../components/PageComparision';
import { ReOrderPageDataOfComparision } from '../middleware/PageComparisionData';
import TestimonialSlider from '../components/TestimonialSlider';
import Carousel from './Carousel';
function ReOrderPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        Aos.refreshHard();
    }, []);


    return (
        <>

            {/* Page Top Section Component Calling Here */}
            <div className="pageTopSectionOnReorderPage" data-aos="fade-up">
                <PagesTopSection data={reOrderPageData} />
            </div>
            {/* Carousel Component Calling Here */}
            <div className="carousel-section-on-re-order--page" data-aos='fade-up'>
                <Carousel />
            </div>

            {/* Image With Text Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfReOrderPageImageWithText} />

            {/* Featured Content Component Calling Here */}
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
                <FeaturedContent />
            </div>

            {/* Page COmparision Component Calling Here */}
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <PagesComparison pageData={ReOrderPageDataOfComparision} />
            </div>
            {/* testimonial Component Calling Here */}
            <div className="testimonialOnReOrderPage" data-aos="fade-up">
                <TestimonialSlider/>
            </div>
        </>
    )
}

export default ReOrderPage