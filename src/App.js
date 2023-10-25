
import Header from './Components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Footer from './Components/Footer';
import './Assets/css/Pages.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerAccountPageManu from './Components/CustomerAccountPageManu';
import Home from './Components/Home';
import CustomerManu from './Components/CustomerManu';
import EditProfile from './Components/EditProfile';
import ReOrder from './Components/ReOrder';
import ChangeColor from './Components/ChangeColor';
import ChangePassword from './Components/ChangePassword';
import EasyTransition from './Components/EasyTransition';
import Intigration from './Components/Intigration';
import BecomePartner from './Components/BecomePartner';
import Careers from './Components/Careers';
import ImpFaqs from './Components/ImpFaqs';
import AllFaqs from './Components/AllFaqs';
import Blog from './Components/Blog';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import faqData from './Middleware/Faqdata';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/customer-account-page' element={<Home/>}/>
      <Route path='/customer-menu' element={<Home/>}/>
      <Route path='/edit-profile' element={<Home/>}/>
      <Route path='/re-order' element={<Home/>}/>
      <Route path='/change-color' element={<Home/>}/>
      <Route path='/change-password' element={<Home/>}/>
      <Route path='/easy-transition' element={<Home/>}/>
      <Route path='/integration' element={<Home/>}/>
      <Route path='/become-a-partner' element={<Home/>}/>
      <Route path='/careers' element={<Home/>}/>
      <Route path='/most-importants-fAQs' element={<Home/>}/>
      <Route path='/aLl-fAQs' element={<AllFaqs data={faqData}/>}/>
      <Route path='/blog' element={<Home/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/contact-us' element={<Home/>}/>
      <Route path='/about-us' element={<Home/>}/>
    </Routes>
    <Footer />
    </div>
     </BrowserRouter>
  );
}

export default App;
