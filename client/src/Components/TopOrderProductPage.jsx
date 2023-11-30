import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
import PagesTopSection from './PagesTopSection';
import { topOrderProductPagedata } from '../Middleware/PagesTopSectiondata';
import Carousel from './Carousel';
import { dataOfTopOrderedProductImageWithText } from '../Middleware/ImageWithTextData';
import ImageWithText from './ImageWithText';
import TestimonialSlider from './TestimonialSlider';
import FeaturedContent from './FeaturedContent';

function TopOrderProductPage() {

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
                <title> Top Order Products Shopify App | Customer Dashboard Pro</title>
                <meta name="description" content="Optimize your shopping experience with our Customer Dashboard Pro on Shopify. Explore seamlessly curated top-order products for a personalized journey. Effortlessly reorder your favorites, capturing valuable insights along the way." />
                <meta property="og:title" content="Top Order Products Shopify App  | Customer Dashboard Pro"></meta>
                <meta property="og:site_name" content="Top-Order-Products Shopify App  | Customer Dashboard Pro"></meta>
                <meta property="og:url" content="https://customerdashboard.pro/pages/top-order-products"></meta>
                <meta property="og:description" content="Enhance Your Shopping: Navigate effortlessly through your recently viewed products with the intuitive Customer Dashboard Pro on Shopify. Designed for an Amazon-inspired experience, it's now simpler than ever to re-order your favorites. Capture valuable insights effortlessly." />
            </Helmet>

            {/* Pages Top Section Component Calling here */}
            <PagesTopSection data={topOrderProductPagedata} />

            {/* Carouse Component Calling Here */}
            <div className="carouseSectionOnRecentViewPage" data-aos='fade-up'>
                <Carousel />
            </div>

            {/* Fetured Content Component Calling Here */}
            <FeaturedContent />

            {/* Image With Text Data Component Calling Here */}
            <ImageWithText imageWithTextData={dataOfTopOrderedProductImageWithText} />

            {/* testimonial Component Calling Here */}
            <div className="TestimonialOnToporderProductsPage" data-aos='fade-up'>
            <TestimonialSlider/>
            </div>

        </>
    )
}

export default TopOrderProductPage