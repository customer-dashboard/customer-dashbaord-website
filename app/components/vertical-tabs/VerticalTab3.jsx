import { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import {vTabData4} from '../vertical-tabs/VerticalTabsData';
import Ten  from '../vertical-tabs/AllTabsData/more-tabs/Ten'
import Eleven  from '../vertical-tabs/AllTabsData/more-tabs/Eleven'
import Twelve  from '../vertical-tabs/AllTabsData/more-tabs/Twelve'
function VerticalTab3() {
  const [activeTab, setActiveTab] = useState("ten");
  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const tabs = ["ten", "eleven", "twelve"]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, [tabs]);

  return (
    <>
    <section className='vertical-tab--wraper'>
    <div className="vertical-tabs">
      <div className="container">
      <div class="plugin new_account_tabs_features account_potential mb-4"><h2>Discover the Power of <span className='uniqu_color'>Shopify New Customer Account</span> Features With Customer Dashboard Pro</h2>
      <p className='mt-3'>Enhance the customer experience with powerful tools, engaging widgets, and innovative features designed exclusively for <span>Shopify new customer accounts.</span></p></div>
      <Tab.Container id="left-tabs-example" activeKey={activeTab} onSelect={handleTabSelect}>
      <Row className='align-items-center justify-content-between'>
        <Col lg={5} className='col-md-6'>
          <Nav variant="pills" className="flex-column" data-active-pil={activeTab}>
            <div className='nav-item-b-wrapper' data-active={activeTab}></div>
            {
              vTabData4.map((item, i) => {
                return (
                  <Nav.Item key={i}>
                    <Nav.Link className={item.tClassName} eventKey={item.tEventKey}>
                        <div className="v-tab-h-container align-items-center d-flex c-fff">
                        <div className="vtab-icon">{item.icon}</div>
                        <div className="nav-items-el">
                          <h3>{item.tHeading}</h3>
                          <p>{item.tDescription}</p>
                        </div>
                        </div>
                      </Nav.Link>
                  </Nav.Item>
                )
              })
            }
          </Nav>
        </Col>
        <Col lg={6} className='col-md-6'>
          <Tab.Content>
            <Tab.Pane eventKey="ten"> <Ten />  </Tab.Pane>
            <Tab.Pane eventKey="eleven"> <Eleven/> </Tab.Pane>
            <Tab.Pane eventKey="twelve"> <Twelve/> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default VerticalTab3