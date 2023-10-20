import { useState } from "react";
import { Button, Container, Nav, NavDropdown, Navbar,Image } from "react-bootstrap";
import logo from '../Assets/Images/Customer Dashboard_Logo.png';


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
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle_btn"/>
                    <Navbar.Brand href="/" className="customer_logo">
                        <Image src={logo}></Image>
                    </Navbar.Brand>
                    <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" className="btn header_btn btn-md ml-15 d-none-min-991">View Demo</Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown href="#features" title="Features" id="basic-nav-dropdown" show={IsOpen} onClick={()=>UpdateIsOpen(!IsOpen)} onMouseOver={()=>UpdateIsOpen(true)} onMouseLeave={()=>UpdateIsOpen(false)}>
                                <NavDropdown.Item href="#Customer Account page" className="Nav-item">Customer Account Page</NavDropdown.Item>
                                <NavDropdown.Item href="#Customer menu" className="Nav-item">Customer Menu</NavDropdown.Item>
                                <NavDropdown.Item href="#Edit Profile" className="Nav-item">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#Re-Order" className="Nav-item">Re-Order</NavDropdown.Item>
                                <NavDropdown.Item href="#Change Color" className="Nav-item">Change Color</NavDropdown.Item>
                                <NavDropdown.Item href="#Change password" className="Nav-item">Change Password</NavDropdown.Item>
                                <NavDropdown.Item href="#Easy transition" className="Nav-item">Easy Transition</NavDropdown.Item>
                                <NavDropdown.Item href="#Custom Fields" className="Nav-item">Custom Fields</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown href="#Resources" title="Resources" id="basic-nav-dropdown" show={SecondIsOpen} onClick={()=>UpdateSecondIsOpen(!SecondIsOpen)} onMouseOver={handleIsSecondOpen} onMouseLeave={handleIsSecondClosed} >
                                <NavDropdown.Item href="#Customer Account page" className="Nav-item">Customer Account page</NavDropdown.Item>
                                <NavDropdown.Item href="#Customer menu" className="Nav-item">Customer menu</NavDropdown.Item>
                                <NavDropdown.Item href="#Edit Profile" className="Nav-item">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#Re-Order" className="Nav-item">Re-Order</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                            <NavDropdown href="#partners" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed}>
                                <NavDropdown.Item href="#Customer Account page" className="Nav-item">Customer Account page</NavDropdown.Item>
                                <NavDropdown.Item href="#Customer menu" className="Nav-item">Customer menu</NavDropdown.Item>
                                <NavDropdown.Item href="#Edit Profile" className="Nav-item">Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#Re-Order" className="Nav-item">Re-Order</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
                       </Nav>
                      
                    </Navbar.Collapse>
                    <a href="#">
                     <Button variant="primary" href="https://customer-dashboard.myshopify.com" target="_blank" className="btn header_btn btn-md ml-15 d-none-991">View Demo</Button>
                    </a>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;