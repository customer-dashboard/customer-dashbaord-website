import React from 'react';
import { CustomFieldPageData } from '../../middleware/PageTopSectionData';
import PagesTopSection from '../PageTopSection';
import { useEffect } from 'react';
import ImageWithText from '../ImageWithText';
import FeaturedContent from '../FeaturedContent';
import { dataOfCUstomFieldsImageWithText } from '../../middleware/ImageWithTextData';
import TestimonialSlider from '../slider/TestimonialSlider';
import Carousel from '../slider/Carousel';
import TransitionEffect from '../FadeTransition/TransitionEffect';
import KnowlageBase from '../KnowlageBase';
import { FeaturedData, featuresPageHeadings } from '../../middleware/FeaturedContentDataM';


function CustomerFieldsPage(props) {
    const { showComponents } = props;
    useEffect(() => {
        TransitionEffect();
    }, []);


    return (
        <>

            {/* Page Top Section Component Calling Here */}
            <div className="pageTopSectionOnReorderPage" data-aos="fade-up">
                <PagesTopSection showComponents={showComponents} data={CustomFieldPageData} />
            </div>
            {/* Carousel Component Calling Here */}
            <div className="carousel-section-on-re-order--page" data-aos='fade-up'>
                <Carousel />
            </div>

            {/* Image With Text Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfCUstomFieldsImageWithText} />

            {/* Featured Content Component Calling Here */}
            <div className="pageTopSectionOnHomePage" data-aos="fade-up">
                <FeaturedContent data={featuresPageHeadings} features={FeaturedData}/>
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

export default CustomerFieldsPage