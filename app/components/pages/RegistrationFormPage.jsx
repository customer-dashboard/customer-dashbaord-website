import React from 'react';
import { RegistrationFormPageData } from '../../middleware/PageTopSectionData';
import PagesTopSection from '../PageTopSection';
import { useEffect } from 'react';
import ImageWithText from '../ImageWithText';
import FeaturedContent from '../FeaturedContent';
import { dataOfRegistrationFormImageWithText } from '../../middleware/ImageWithTextData';
import PagesComparison from '../PageComparision';
import { RegistrationFormComparisonData } from '../../middleware/PageComparisionData';
import TestimonialSlider from '../slider/TestimonialSlider';
import Carousel from '../slider/Carousel';
import TransitionEffect from '../FadeTransition/TransitionEffect';
import KnowlageBase from '../KnowlageBase';
import { FeaturedData, featuresPageHeadings } from '../../middleware/FeaturedContentDataM';


function RegistrationFormPage() {

    useEffect(() => {
        TransitionEffect();
    }, []);


    return (
        <>

            {/* Page Top Section Component Calling Here */}
            <div className="pageTopSectionOnReorderPage" data-aos="fade-up">
                <PagesTopSection data={RegistrationFormPageData} />
            </div>
            {/* Carousel Component Calling Here */}
            <div className="carousel-section-on-re-order--page" data-aos='fade-up'>
                <Carousel />
            </div>

            {/* Image With Text Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfRegistrationFormImageWithText} />

   
        {/* Page COmparision Component Calling Here */}
        <div className="pageTopSectionOnHomePage" data-aos="fade-up">
        <PagesComparison pageData={RegistrationFormComparisonData} />
        </div>
        {/* Featured Content Component Calling Here */}
        <div className="pageTopSectionOnHomePage" data-aos="fade-up">
            <FeaturedContent  data={featuresPageHeadings} features={FeaturedData}/>
            </div>
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

export default RegistrationFormPage