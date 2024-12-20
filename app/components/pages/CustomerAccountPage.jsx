import React from 'react';
import { AccountPageData } from '../../middleware/PageTopSectionData';
import PagesTopSection from '../PageTopSection';
import { useEffect } from 'react';
import Aos from 'aos';
import ImageWithText from '../ImageWithText';
import FeaturedContent from '../FeaturedContent';
import { dataOfAccountPageImageWithText } from '../../middleware/ImageWithTextData';
import PagesComparison from '../PageComparision';
import { AccountPageDataOfComparision } from '../../middleware/PageComparisionData';
import TestimonialSlider from '../slider/TestimonialSlider';
import Carousel from '../slider/Carousel';
import { FeaturedData, featuresPageHeadings } from '../../middleware/FeaturedContentDataM';
function CustomerAccountPage() {

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
                <PagesTopSection data={AccountPageData} />
            </div>
            {/* Carousel Component Calling Here */}
            <div className="carousel-section-on-re-order--page" data-aos='fade-up'>
                <Carousel />
            </div>

            {/* Image With Text Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfAccountPageImageWithText} />

            {/* Featured Content Component Calling Here */}
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
                <FeaturedContent data={featuresPageHeadings} features={FeaturedData}/>
            </div>

            {/* Page COmparision Component Calling Here */}
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <PagesComparison pageData={AccountPageDataOfComparision} />
            </div>
            {/* testimonial Component Calling Here */}
            <div className="testimonialOnReOrderPage" data-aos="fade-up">
                <TestimonialSlider/>
            </div>
        </>
    )
}

export default CustomerAccountPage