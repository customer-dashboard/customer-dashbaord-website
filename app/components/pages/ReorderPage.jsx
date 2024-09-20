import React from 'react';
import { reOrderPageData } from '../../middleware/PageTopSectionData';
import PagesTopSection from '../PageTopSection';
import { useEffect } from 'react';
import ImageWithText from '../ImageWithText';
import FeaturedContent from '../FeaturedContent';
import { dataOfReOrderPageImageWithText } from '../../middleware/ImageWithTextData';
import PagesComparison from '../PageComparision';
// import { ReOrderPageDataOfComparision } from '../../middleware/PageComparisionData';
import TestimonialSlider from '../slider/TestimonialSlider';
import Carousel from '../slider/Carousel';
import TransitionEffect from '../FadeTransition/TransitionEffect';
import KnowlageBase from "../KnowlageBase";

function ReOrderPage() {

    useEffect(() => {
        TransitionEffect();
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
            {/* <ImageWithText withoutBackground={true} imageWithTextData={ReorderPageShowing} /> */}

            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
                <FeaturedContent />
            </div>
               {/* Image With Text Component Calling Here */}
             {/* Page COmparision Component Calling Here */}
             {/* <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <PagesComparison pageData={ReOrderPageDataOfComparision} />
            </div> */}
  

            {/* testimonial Component Calling Here */}
            <div className="testimonialOnReOrderPage" data-aos="fade-up">
                <TestimonialSlider/>
            </div>
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <KnowlageBase/>
            </div>
        </>
    )
}

export default ReOrderPage