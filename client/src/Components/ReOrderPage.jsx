import React from 'react';
import { Helmet } from 'react-helmet';
import PagesTopSection from './PagesTopSection';
import { reOrderPageData } from '../Middleware/PagesTopSectiondata';
import { useEffect } from 'react';
import Aos from 'aos';
import FeaturedContent from './FeaturedContent';
import ImageWithText from './ImageWithText';
import { dataOfReOrderPageImageWithText } from '../Middleware/ImageWithTextData';
import Carousel from './Carousel';
import TestimonialSlider from './TestimonialSlider';
import PagesComparison from './pagesComparison';
import { ReOrderPageDataOfComparision } from '../Middleware/PageComparisonData';
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

            <Helmet>
                <title> Re-order Page Shopify App | Customer Dashboard Pro</title>
                <meta name="description" content="Optimize your shopping experience with the Customer Dashboard Pro on Shopify, offering an Amazon-inspired design. Seamlessly re-order your favorite products and effortlessly capture valuable shopper data. Elevate satisfaction as customers navigate this intuitive dashboard to browse and re-order with ease. Transform your Shopify store today for a personalized and efficient shopping journey, making re-ordering a breeze." />
                <meta property="og:title" content="Customized Shopify Re-order Page | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Re-order Page | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/pages/re-order"></meta>
                <meta property="og:description" content="Optimize your shopping experience with the Customer Dashboard Pro on Shopify, offering an Amazon-inspired design. Seamlessly re-order your favorite products and effortlessly capture valuable shopper data." />
            </Helmet>

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
                <TestimonialSlider />
            </div>
        </>
    )
}

export default ReOrderPage