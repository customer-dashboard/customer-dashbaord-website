
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
    <Route path='/' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/all-faqs' element={<AllFaqs data={faqData}/>}/>
      <Route path='/#' element={<Home/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/#' element={<Home/>}/>
    </Routes>
    <Footer />
    </div>
     </BrowserRouter>
  );
}

export default App;
