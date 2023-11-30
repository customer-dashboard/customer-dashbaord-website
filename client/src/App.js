
import Header from './Components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
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
import CustomerAccountPageManu from './Components/CustomerAccountPageManu';
import ChangeLog from './Components/ChangeLog';
import ReOrderPage from './Components/ReOrderPage';
import RecentlyViewPage from './Components/RecentlyViewPage';
import TopOrderProductPage from './Components/TopOrderProductPage';
import TranslationPage from './Components/TranslationPage';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/#' element={<Home title="Customer Dashboard Pro App for Shopify"/>}/>
      <Route path='/pages/translation' element={<TranslationPage/>}/>
      <Route path='/pages/top-order-products' element={<TopOrderProductPage/>}/>
      <Route path='/pages/recent-view' element={<RecentlyViewPage/>}/>
      <Route path='/pages/re-order' element={<ReOrderPage/>}/>
      <Route path='/pages/customer-account' element={<CustomerAccountPageManu/>}/>
      <Route path='/pages/changelog' element={<ChangeLog/>}/>
      <Route path='/pages/pricing' element={<Pricing title="Pricing"/>}/>
      <Route path='/pages/faq' element={<AllFaqs data={faqData} title="Faqs"/>}/>
      <Route path='/pages/privacy-policy' element={<PrivacyPolicy title="Privacy Policy - Customer Dashboard Pro"/>}/>
      <Route path='/pages/contact-us' element={<ContactUs title="Contact Us" description="this is for contact us"/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer />
    </div>
     </BrowserRouter>
  );
}

export default App;
