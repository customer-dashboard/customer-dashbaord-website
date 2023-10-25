
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
      <Route path='/Customer-Account-Page' element={<CustomerAccountPageManu/>}/>
      <Route path='/Customer-Menu' element={<CustomerManu/>}/>
      <Route path='/Edit-Profile' element={<EditProfile/>}/>
      <Route path='/Re-Order' element={<ReOrder/>}/>
      <Route path='/Change-Color' element={<ChangeColor/>}/>
      <Route path='/Change-Password' element={<ChangePassword/>}/>
      <Route path='/Easy-Transition' element={<EasyTransition/>}/>
      <Route path='/Integration' element={<Intigration/>}/>
      <Route path='/Become-a-Partner' element={<BecomePartner/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/Most-importants-FAQs' element={<ImpFaqs/>}/>
      <Route path='/ALl-FAQs' element={<AllFaqs data={faqData}/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/Contact-Us' element={<ContactUs/>}/>
      <Route path='/About-Us' element={<AboutUs/>}/>
    </Routes>
    <Footer />
    </div>
     </BrowserRouter>
  );
}

export default App;
