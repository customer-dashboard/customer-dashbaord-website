import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Carousel from './Carousel';
import ImageWithText from './ImageWithText';
import FeaturedContent from './FeaturedContent';
import { dataOfAccountPageImageWithText } from '../Middleware/ImageWithTextData';
import Aos from 'aos';
import PagesTopSection from './PagesTopSection';
import { AccountPageData } from '../Middleware/PagesTopSectiondata';
import TestimonialSlider from './TestimonialSlider';
import PagesComparison from './pagesComparison';
import { AccountPageDataOfComparision } from '../Middleware/PageComparisonData';
function CustomerAccountPageManu() {

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
                <title>Shopify Customer Account Page | Customer Dashboard Pro</title>
                <meta name="description" content="Enhance the shopping experience you offer and capture more shopper data with Amazon-like Customer Account Pages on your Shopify store." />
                <meta property="og:title" content="Customized Shopify Customer Account Page | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Customer Account Page | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/pages/customer-account"></meta>
                <meta property="og:description" content="Enhance the shopping experience you offer and capture more shopper data with Amazon and Flipcart-like Customer Account Pages on your Shopify store." />
            </Helmet>

            {/* Page Top Component Calling Here */}
            <PagesTopSection data={AccountPageData} />

            {/* Carousel Component Calling Here */}
            <div className="carousel-section-on-account-page" data-aos='fade-up'>
                    <Carousel />
            </div>

            {/* Image With Text Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfAccountPageImageWithText}/>

            {/* Featured Content component calling here */}
            <FeaturedContent />

            {/* pages comparison component calling here */}
            <PagesComparison pageData={AccountPageDataOfComparision} />

            {/* Testimonial Component Calling Here */}
            <div className="testimonialOnAccountPage" data-aos="fade-up">
                <TestimonialSlider />
            </div>
        </>
    )
}

export default CustomerAccountPageManu