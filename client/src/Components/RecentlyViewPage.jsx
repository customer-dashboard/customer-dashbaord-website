import React from 'react';
import PagesTopSection from './PagesTopSection';
import { recentlyViewPageData } from '../Middleware/PagesTopSectiondata';
import Carousel from './Carousel';
import { Helmet } from 'react-helmet';
import ImageWithText from './ImageWithText';
import { dataOfRecentViewImageWithText } from '../Middleware/ImageWithTextData';
import FeaturedContent from './FeaturedContent';
import TestimonialSlider from './TestimonialSlider';
import Aos from 'aos';
import { useEffect } from 'react';

function RecentlyViewPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({
            duration: 400,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        Aos.refreshHard();
    }, []);


    return (
        <>
            <Helmet>
                <title> Recently Viewed Product Shopify App | Customer Dashboard Pro</title>
                <meta name="description" content="Enhance Your Shopping: Navigate effortlessly through your recently viewed products with the intuitive Customer Dashboard Pro on Shopify. Designed for an Amazon-inspired experience, it's now simpler than ever to re-order your favorites. Capture valuable insights effortlessly. Elevate satisfaction and personalize your journey today. Breeze through re-orders on your Shopify store with our efficient and user-friendly dashboard." />
                <meta property="og:title" content="Recentlly View Page | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Recentlly-Viewd Page | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/pages/recent-view"></meta>
                <meta property="og:description" content="Enhance Your Shopping: Navigate effortlessly through your recently viewed products with the intuitive Customer Dashboard Pro on Shopify. Designed for an Amazon-inspired experience, it's now simpler than ever to re-order your favorites. Capture valuable insights effortlessly." />
            </Helmet>

            {/* Page Top Section Component Calling Here */}
            <PagesTopSection data={recentlyViewPageData} />

            {/* Carouse Component Calling Here */}
            <div className="carouseSectionOnRecentViewPage" data-aos='fade-up'>
            <Carousel />
            </div>

            {/* Fetured Content Component Calling Here */}
            <FeaturedContent/>
            
            
            {/* Image With Text Data Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfRecentViewImageWithText}/>

        
            {/* testimonial Component Calling Here */}
            <div className="TestimonialOnRecentViewPage" data-aos='fade-up'>
            <TestimonialSlider/>
            </div>
        </>
    )
}

export default RecentlyViewPage