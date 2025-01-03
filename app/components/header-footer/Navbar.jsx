import { Link } from '@remix-run/react';
import { useState, useEffect } from "react";
import { Button, Container, Nav, NavDropdown, Navbar,Image } from "react-bootstrap";
// import newLogo from '../assets/images/Logo/newLogo.png'
import newLogo from '../../assets/images/Logo/newLogo.png'

function Header() {

    const [isSticky, setSticky] = useState(false);

    // Add an event listener to track the scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    const [IsOpen , UpdateIsOpen]= useState(false);
    const [SecondIsOpen , UpdateSecondIsOpen]= useState(false);
    const [ThirdIsOpen , UpdateThirdIsOpen]= useState(false);
    const [fourth , setFourth]= useState(false);

   
    const handleIsSecondOpen=(e)=>{
        UpdateSecondIsOpen(true);
    }
    const handleIsSecondClosed=(e)=>{
        UpdateSecondIsOpen(false);
    }
    const handleFourthOpen=(e)=>{
        setFourth(true);
    }
    const handleFourthClose=(e)=>{
        setFourth(false);
    }
    const handleIsThirdOpen=(e)=>{
        UpdateThirdIsOpen(true);
    }
    const handleIsThirdClosed=(e)=>{
        UpdateThirdIsOpen(false);
    }
    return (
        <>
        
            <Navbar expand="lg" className={isSticky ? 'sticky-header nav_navbar' : 'nav_navbar'}>
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle_btn hamburger-icon"/>
                    <Link to="/" className="customer_logo">
                        <Image src={newLogo}></Image>
                    </Link>
                    <div className="min-width-header-btn">
                    <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" className="btn header_btn btn-md ml-15 d-none-min-991">View Demo</Button>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                        <NavDropdown  title="New Customer Account" id="basic-nav-dropdown" show={fourth} onClick={()=>setFourth(!fourth)} onMouseOver={handleFourthOpen} onMouseLeave={handleFourthClose} >                               
                                {/* <Link to="/customer-account" className="Nav-item nav-link-custom nav-link-custom-drppdown">Customer Account Page</Link> */}
                                {/* <Link to="/pages/changelog" className="Nav-item nav-link-custom">Changelog</Link> */}
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Profile Fields</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Order Tracking</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Order Return</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Integrations</Link>
                                {/* <Link to="/recently-view" className="Nav-item nav-link-custom nav-link-custom-drppdown">Recently Viewed Product</Link> */}
                                {/* <Link to="/top-order-products" className="Nav-item nav-link-custom nav-link-custom-drppdown">Top Order Products</Link> */}
                                {/* <Link to="/navigation-builder" className="Nav-item nav-link-custom nav-link-custom-drppdown">Navigation Builder</Link> */}
                                {/* <Link to="/custom-fields" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Fields</Link> */}
                                {/* <Link to="/pages/top-order-products" className="Nav-item nav-link-custom nav-link-custom-drppdown">Top Order Products</Link> */}
                                {/* <Link to="/translation" className="Nav-item nav-link-custom nav-link-custom-drppdown">Easy Translation</Link>  */}
                                {/* <Link to="/custom-signup-form" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Signup Form</Link>  */}
                                {/* <Link to="/#" className="Nav-item nav-link-custom-drppdown">Change Color</Link>
                                <Link to="/#" className="Nav-item nav-link-custom-drppdown">Change Password</Link>
                                <Link to="/#" className="Nav-item nav-link-custom-drppdown">Easy Translation</Link> */}
                            </NavDropdown>
                            <NavDropdown  title="Legacy Customer Account" id="basic-nav-dropdown" show={IsOpen} onClick={()=>UpdateIsOpen(!IsOpen)} onMouseOver={()=>UpdateIsOpen(true)} onMouseLeave={()=>UpdateIsOpen(false)}>                               
                                <Link to="/re-order" className="Nav-item nav-link-custom nav-link-custom-drppdown">Re-Order</Link>
                                <Link to="/recently-view" className="Nav-item nav-link-custom nav-link-custom-drppdown">Recently Viewed Product</Link>
                                <Link to="/top-order-products" className="Nav-item nav-link-custom nav-link-custom-drppdown">Top Order Products</Link>
                                <Link to="/navigation-builder" className="Nav-item nav-link-custom nav-link-custom-drppdown">Navigation Builder</Link>
                                <Link to="/custom-fields" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Fields</Link>
                                <Link to="/translation" className="Nav-item nav-link-custom nav-link-custom-drppdown">Easy Translation</Link> 
                                <Link to="/custom-signup-form" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Signup Form</Link> 
                                <Link to="/legacy-customer-account/integrations" className="Nav-item nav-link-custom nav-link-custom-drppdown integrations_legacy_account">Integrations</Link> 
                            </NavDropdown>
                            {/* <NavDropdown  title="Features" id="basic-nav-dropdown" show={IsOpen} onClick={()=>UpdateIsOpen(!IsOpen)} onMouseOver={()=>UpdateIsOpen(true)} onMouseLeave={()=>UpdateIsOpen(false)}>                               
                                <Link to="/re-order" className="Nav-item nav-link-custom nav-link-custom-drppdown">Re-Order</Link>
                                <Link to="/recently-view" className="Nav-item nav-link-custom nav-link-custom-drppdown">Recently Viewed Product</Link>
                                <Link to="/top-order-products" className="Nav-item nav-link-custom nav-link-custom-drppdown">Top Order Products</Link>
                                <Link to="/navigation-builder" className="Nav-item nav-link-custom nav-link-custom-drppdown">Navigation Builder</Link>
                                <Link to="/custom-fields" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Fields</Link>
                                <Link to="/translation" className="Nav-item nav-link-custom nav-link-custom-drppdown">Easy Translation</Link> 
                                <Link to="/custom-signup-form" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Signup Form</Link> 
                            </NavDropdown> */}

                            <NavDropdown href="Resources" title="Resources" id="basic-nav-dropdown" show={SecondIsOpen} onClick={()=>UpdateSecondIsOpen(!SecondIsOpen)} onMouseOver={handleIsSecondOpen} onMouseLeave={handleIsSecondClosed} >
                                {/* <Link to="/faqs" className="Nav-item nav-link-custom nav-link-custom-drppdown">Faq's</Link> */}
                                <Link to="/blog" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Blog</Link>
                                <Link to="https://customer-dashboard-pro.helpscoutdocs.com" target='_blank' className=" Nav-item nav-link-custom nav-link-custom-drppdown">Knowledge base</Link>
                                {/* <Link target='_blank' to='/' className="text-reset"></Link> */}
                                {/* <Link to="/#" className="Nav-item nav-link-custom">Case Study</Link> */}
                                {/* <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link>  */}
                            </NavDropdown>
                            <NavDropdown href="Partners" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed} >
                                {/* <Link to="/become-a-partner" className="Nav-item nav-link-custom nav-link-custom-drppdown">Become a Partner</Link> */}
                                <Link to="/partners" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Partners</Link>
                                {/* <Link to="/#" className="Nav-item nav-link-custom">Case Study</Link> */}
                                <Link to="/become-a-partner" className="Nav-item nav-link-custom">Become a partner</Link>
                            </NavDropdown>
                            {/* <Link to="/faqs" className=" main-headernav Nav-item nav-link-custom">Faq's</Link> */}
                            <Link to="/pricing" className=" main-headernav Nav-item nav-link-custom">Pricing</Link>
                            {/* <Link to="/pages/faq" className=" main-headernav Nav-item nav-link-custom">faq</Link> */}
                            {/* <Link to="/blogs" className=" main-headernav Nav-item nav-link-custom">Blogs</Link> */}
                            {/* <Link to="/integrations-partners" className=" main-headernav Nav-item nav-link-custom">Integrations & Partners</Link> */}
                            
                            {/* <NavDropdown href="javascript:void(0)" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed}> */}
                                {/* <Link to="/customer-menu" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/edit-profile" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link> */}
                                {/* <a href="https://apps.shopify.com/customer-account-verification" target="_blank" rel="noreferrer" className="Nav-item nav-link-custom nav-link-custom-drppdown">Email Checker</a> */}
                            {/* </NavDropdown> */}
                            {/* <Link to="/contact-us" className=" main-headernav Nav-item nav-link-custom">Contact Us</Link> */}
                            {/* <a href="https://apps.shopify.com/customer-dashboard-pro" className=" main-headernav Nav-item nav-link-custom" rel="noreferrer" target="_blank">Install</a> */}
                       </Nav>
                      
                    </Navbar.Collapse>
                     <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" rel="noreferrer" className="btn header_btn btn-md ml-15 d-none-991">View Demo</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
