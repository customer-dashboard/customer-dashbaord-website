import { useState } from "react";
import { Button, Container, Nav, NavDropdown, Navbar,Image } from "react-bootstrap";
import logo from '../Assets/Images/Customer Dashboard_Logo.png';
import { Link } from "react-router-dom";

function Header() {
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
        
            <Navbar expand="lg" className="nav_navbar">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle_btn hamburger-icon"/>
                    <Link to="/" className="customer_logo">
                        <Image src={logo}></Image>
                    </Link>
                    <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" className="btn header_btn btn-md ml-15 d-none-min-991">View Demo</Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown href="features" title="Features" id="basic-nav-dropdown" show={IsOpen} onClick={()=>UpdateIsOpen(!IsOpen)} onMouseOver={()=>UpdateIsOpen(true)} onMouseLeave={()=>UpdateIsOpen(false)}>                               
                                <Link to="/customer-account-page" className="Nav-item nav-link-custom">Customer Account Page</Link>
                                <Link to="/customer-menu" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/edit-profile" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link>
                                <Link to="/change-color" className="Nav-item nav-link-custom">Change Color</Link>
                                <Link to="/change-password" className="Nav-item nav-link-custom">Change Password</Link>
                                <Link to="/easy-transition" className="Nav-item nav-link-custom">Easy Transition</Link>
                            </NavDropdown>

                            <NavDropdown href="Resources" title="Resources" id="basic-nav-dropdown" show={SecondIsOpen} onClick={()=>UpdateSecondIsOpen(!SecondIsOpen)} onMouseOver={handleIsSecondOpen} onMouseLeave={handleIsSecondClosed} >
                                <Link to="/customer-account-page" className="Nav-item nav-link-custom">Customer Account Page</Link>
                                <Link to="/customer-menu" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/edit-profile" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link>
                            </NavDropdown>

                            <Nav.Link href="pricing">Pricing</Nav.Link>

                            <NavDropdown href="#partners" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed}>
                                <Link to="/customer-account-page" className="Nav-item nav-link-custom">Customer Account Page</Link>
                                <Link to="/customer-menu" className="Nav-item nav-link-custom">Customer Menu</Link>
                                <Link to="/edit-profile" className="Nav-item nav-link-custom">Edit Profile</Link>
                                <Link to="/re-order" className="Nav-item nav-link-custom">Re-Order</Link>
                            </NavDropdown>
                            <Link to="/contact-us" className="Nav-item nav-link-custom">Contact Us</Link>
                       </Nav>
                      
                    </Navbar.Collapse>
                     <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" className="btn header_btn btn-md ml-15 d-none-991">View Demo</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;