import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import TabsReuse from './TabReuse';
import Mobilove from './Mobilove';
import {Tabs} from './Tabs';
import Faq from './Faq';
import CustomerAccountPage from './CustomerAccountPage';
import TestimonialSlider from './TestimonialSlider';
import Facility from './Facility';
import StartFree from './StartFree';

function Home() {
  return (
    <>   
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