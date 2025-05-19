import { Link } from '@remix-run/react';
import { useState, useEffect } from "react";
import { Button, Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";
import shopifyOfficialLogoBlack from '../../assets/images/ofiicialBlackShopifyLogo.png';

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    legacy: false,
    resources: false,
    caseStudy: false,
    partners: false,
    newAccount: false,
  });

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 150);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name, open) => {
    setDropdowns(prev => ({ ...prev, [name]: open }));
  };

  return (
    <Navbar expand="lg" className={isSticky ? 'sticky-header nav_navbar' : 'nav_navbar'}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle_btn hamburger-icon" />

        <Link to="/" className="customer_logo">
          <Image
            src="https://mandasa1.b-cdn.net/CustLo/Custlo%20logo%20design017.png"
            loading="lazy"
            title="customer dashboard pro logo"
            alt="customer dashboard pro logo"
            width="100%"
            height="100%"
          />
        </Link>

        <div className="min-width-header-btn">
          <Button
            href="https://apps.shopify.com/customer-dashboard-pro"
            target="_blank"
            rel="noreferrer"
            className="shopify_official_logo__ d-none-min-991 s_btn btns shopify-official-logo-black"
          >
            <Image src={shopifyOfficialLogoBlack} title="Find us on the Shopify app store" alt="Shopify app store logo" />
          </Button>
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/features" className="main-headernav Nav-item nav-link-custom">Features</Link>
            {/* <NavDropdown  title="New Customer Account" id="basic-nav-dropdown" show={fourth} onClick={()=>setFourth(!fourth)} onMouseOver={handleFourthOpen} onMouseLeave={handleFourthClose} >                               
                <Link to="/customer-accounts/custom-fields" className="Nav-item nav-link-custom nav-link-custom-drppdown">Custom Fields</Link>
                <Link to="/customer-accounts/promotional-banners" className="Nav-item nav-link-custom nav-link-custom-drppdown">Promotional Banners</Link>
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
            </NavDropdown> */}
            <NavDropdown
              title="Resources"
              id="resources-dropdown"
              show={dropdowns.resources}
              onMouseOver={() => handleDropdownToggle('resources', true)}
              onMouseLeave={() => handleDropdownToggle('resources', false)}
              onClick={() => handleDropdownToggle('resources', !dropdowns.resources)}
            >
              <Link to="/blog" className="Nav-item nav-link-custom nav-link-custom-drppdown">Blog</Link>
              <Link to="https://customer-dashboard-pro.helpscoutdocs.com" target="_blank" rel="noreferrer" className="Nav-item nav-link-custom nav-link-custom-drppdown">Knowledge base</Link>
            </NavDropdown>

            <NavDropdown
              title="Case Study"
              id="case-study-dropdown"
              show={dropdowns.caseStudy}
              onMouseOver={() => handleDropdownToggle('caseStudy', true)}
              onMouseLeave={() => handleDropdownToggle('caseStudy', false)}
              onClick={() => handleDropdownToggle('caseStudy', !dropdowns.caseStudy)}
            >
              <Link to="/case-study/shopify-plus-stores-succes-stories" className="Nav-item nav-link-custom nav-link-custom-drppdown">Shopify Plus</Link>
            </NavDropdown>

            <NavDropdown
              title="Partners"
              id="partners-dropdown"
              show={dropdowns.partners}
              onMouseOver={() => handleDropdownToggle('partners', true)}
              onMouseLeave={() => handleDropdownToggle('partners', false)}
              onClick={() => handleDropdownToggle('partners', !dropdowns.partners)}
            >
              <Link to="/partners" className="Nav-item nav-link-custom nav-link-custom-drppdown">Partners</Link>
              <Link to="/become-a-partner" className="Nav-item nav-link-custom nav-link-custom-drppdown">Become a partner</Link>
            </NavDropdown>

            <Link to="/pricing" className="main-headernav Nav-item nav-link-custom">Pricing</Link>
          </Nav>
        </Navbar.Collapse>

        <Button
          href="https://apps.shopify.com/customer-dashboard-pro"
          target="_blank"
          rel="noreferrer"
          className="desk_shopify_official_logo__ d-none-991 s_btn btns shopify-official-logo-black"
        >
          <Image src={shopifyOfficialLogoBlack} title="Find us on the Shopify app store" alt="Shopify app store logo" />
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
