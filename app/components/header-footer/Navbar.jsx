import { Link } from '@remix-run/react';
import { useState, useEffect } from "react";
import { Button, Container, Nav, NavDropdown, Navbar,Image } from "react-bootstrap";
import newLogo from '../../assets/images/Logo/newLogo.png'
import { VideDemoModal } from '../Modals/VideDemoModal';
import shopifyOfficialLogoBlack from '../../assets/images/ofiicialBlackShopifyLogo.png';

function Header() {
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 150) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const [IsOpen , UpdateIsOpen]= useState(false);
    const [SecondIsOpen , UpdateSecondIsOpen]= useState(false);
    const [ThirdIsOpen , UpdateThirdIsOpen]= useState(false);
    const [fourth , setFourth]= useState(false);
    const [caseStudy, setCaseStudy] = useState(false);
   
    const handleIsSecondOpen=(e)=>{
        UpdateSecondIsOpen(true);
    }
    const handleCaseStudyOpen=(e)=>{
        setCaseStudy(true);
    }
    const handleCaseStudyClose=(e)=>{
        setCaseStudy(false);
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
                        <Image src={newLogo} loading='lazy' title='customer dashboard pro logo' alt='customer dashboard pro logo' width="100%" height="100%"  ></Image>
                    </Link>
                    <div className="min-width-header-btn">
                        <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="shopify_official_logo__ d-none-min-991  s_btn btns  shopify-official-logo-black">
                            <Image src={shopifyOfficialLogoBlack} title='Find us on the shopify app store' alt="Find us on the shopify app store"></Image>
                        </Button>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                        <NavDropdown  title="New Customer Account" id="basic-nav-dropdown" show={fourth} onClick={()=>setFourth(!fourth)} onMouseOver={handleFourthOpen} onMouseLeave={handleFourthClose} >                               
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Profile Fields</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Order Tracking</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Order Return</Link>
                                <Link to="#" className="Nav-item nav-link-custom nav-link-custom-drppdown">Integrations</Link>
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
                            <NavDropdown href="Resources" title="Resources" id="basic-nav-dropdown" show={SecondIsOpen} onClick={()=>UpdateSecondIsOpen(!SecondIsOpen)} onMouseOver={handleIsSecondOpen} onMouseLeave={handleIsSecondClosed} >
                                <Link to="/blog" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Blog</Link>
                                <Link to="https://customer-dashboard-pro.helpscoutdocs.com" target='_blank' className=" Nav-item nav-link-custom nav-link-custom-drppdown">Knowledge base</Link>
                            </NavDropdown>
                            <NavDropdown href="Resources" title="Case Study" id="basic-nav-dropdown" show={caseStudy} onClick={()=>handleCaseStudyOpen(!caseStudy)} onMouseOver={handleCaseStudyOpen} onMouseLeave={handleCaseStudyClose} >
                                <Link to="/case-study/shopify-plus-stores-succes-stories" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Shopify Plus</Link>
                                {/* <Link to="/industries-solutions" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Industries</Link> */}
                            </NavDropdown>
                            <NavDropdown href="Partners" title="Partners" id="basic-nav-dropdown" show={ThirdIsOpen} onClick={()=>UpdateThirdIsOpen(!ThirdIsOpen)} onMouseOver={handleIsThirdOpen} onMouseLeave={handleIsThirdClosed} >
                                <Link to="/partners" className=" Nav-item nav-link-custom nav-link-custom-drppdown">Partners</Link>
                                <Link to="/become-a-partner" className="Nav-item nav-link-custom nav-link-custom-drppdown">Become a partner</Link>
                            </NavDropdown>
                            <Link to="/pricing" className="main-headernav Nav-item nav-link-custom">Pricing</Link>
                       </Nav>
                      
                    </Navbar.Collapse>
                        <Button href="https://apps.shopify.com/customer-dashboard-pro" target="_blank" rel="norefferer" className="desk_shopify_official_logo__ d-none-991  s_btn btns shopify-official-logo-black">
                            <Image src={shopifyOfficialLogoBlack} title='Find us on the shopify app store' alt="Find us on the shopify app store"></Image>
                        </Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
