
import Header from './Components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Footer from './Components/Footer';
import './Assets/css/Pages.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AllFaqs from './Components/AllFaqs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import faqData from './Middleware/Faqdata';
import Pricing from './Components/Pricing';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
    <Route path='/' element={<Home  title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/pricing' element={<Pricing title="Pricing"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/faq' element={<AllFaqs data={faqData} title="Faqs"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy title="Privacy Policy - Customer Dashboard Pro"/>}/>
      <Route path='/contact-us' element={<ContactUs title="Contact Us" description="this is for contact us"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
    </Routes>
    <Footer />
    </div>
     </BrowserRouter>
  );
}

export default App;
