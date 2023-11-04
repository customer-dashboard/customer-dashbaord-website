import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import TabsReuse from './TabReuse';
import { Helmet } from 'react-helmet';
import Mobilove from './Mobilove';
import { Tabs } from './Tabs';
import Faq from './Faq';
import CustomerAccountPage from './CustomerAccountPage';
import TestimonialSlider from './TestimonialSlider';
import Facility from './Facility';
import StartFree from './StartFree';
import { useEffect } from 'react';

function Home({ title }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Demo Store customer account page Why install? Customer account page quite often does not receive as much attention as other pages even by the biggest stores.As a result, it stays boring and unengaging.But why should that be the case?Why not give your customers a more sophisticated place to interact with you.Well, now you can do … Home Read More »" />
        <meta property="og:title" content="Customer Home - Customer-Dashboard-Pro" />
        <meta property="og:description" content="Customer Dashboard Og Description" />
      </Helmet>
      <Banner />
      <Carousel />
      <TabsReuse />
      <Mobilove />
      <Tabs />
      <Faq />
      <CustomerAccountPage />
      <TestimonialSlider />
      <Facility />
      <StartFree />
    </>
  )
}

export default Home