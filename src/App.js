
import Header from './Components/Header';
import Banner from './Components/Banner';
import Carousel from './Components/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Faq from './Components/Faq';
import CustomerAccountPage from './Components/CustomerAccountPage';
import TestimonialSlider from './Components/TestimonialSlider';
import Facility from './Components/Facility';
import StartFree from './Components/StartFree';
import Footer from './Components/Footer';
import Mobilove from './Components/Mobilove';
import {Tabs} from './Components/Tabs';
import TabsReuse from './Components/TabReuse';


function App() {
  return (
    <div className="App">
     <Header />
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
    <Footer />
     </div>
  );
}

export default App;
