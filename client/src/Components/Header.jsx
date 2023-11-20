import { useState, useEffect } from "react";
import { Button, Container, Nav, NavDropdown, Navbar,Image } from "react-bootstrap";
import logo from '../Assets/Images/Customer Dashboard_Logo.png';
import newLogo from '../Assets/Images/Logo/newLogo.png'
import { Link } from "react-router-dom";

function Header() {

    const [isSticky, setSticky] = useState(false);

    // Add an event listener to track the scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
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
   
    const handleIsSecondOpen=(e)=>{
        UpdateSecondIsOpen(true);
    }
    const handleIsSecondClosed=(e)=>{
        UpdateSecondIsOpen(false);
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
                            {/* <NavDropdown href="features" title="Features" id="basic-nav-dropdown" show={IsOpen} onClick={()=>UpdateIsOpen(!IsOpen)} onMouseOver={()=>UpdateIsOpen(true)} onMouseLeave={()=>UpdateIsOpen(false)}>                               
                                <Link to="customer-account" className="Nav-item nav-link-custom">Customer Account Page</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Re-Order</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Change Color</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Change Password</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Easy Translation</Link>
                            </NavDropdown> */}

                            {/* <NavDropdown href="Resources" title="Resources" id="basic-nav-dropdown" show={SecondIsOpen} onClick={()=>UpdateSecondIsOpen(!SecondIsOpen)} onMouseOver={handleIsSecondOpen} onMouseLeave={handleIsSecondClosed} >
                                <Link to="/faq" className="Nav-item nav-link-custom">Faq's</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Blog</Link>
                                <Link to="/#" className="Nav-item nav-link-custom">Case Study</Link> */}
                                {/* <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link> */}
                            {/* </NavDropdown> */}
                            <Link to="/faq" className="Nav-item nav-link-custom">Faq's</Link>
                            <Link to="/pricing" className="Nav-item nav-link-custom">Pricing</Link>

                            <NavDropdown href="javascript:void(0)" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed}>
                                {/* <Link to="/customer-menu" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/edit-profile" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link> */}
                                <a href="https://apps.shopify.com/customer-account-verification" target="_blank" rel="noreferrer" className="Nav-item nav-link-custom">Email Checker</a>
                            </NavDropdown>
                            <Link to="/contact-us" className="Nav-item nav-link-custom">Contact Us</Link>
                            <a href="https://apps.shopify.com/customer-dashboard-pro" className="Nav-item nav-link-custom" rel="noreferrer" target="_blank">Install</a>
                       </Nav>
                      
                    </Navbar.Collapse>
                     <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" rel="noreferrer" className="btn header_btn btn-md ml-15 d-none-991">View Demo</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;