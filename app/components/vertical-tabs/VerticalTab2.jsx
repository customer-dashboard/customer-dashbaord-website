import { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import {vTabData3} from '../vertical-tabs/VerticalTabsData';
import Seven  from '../vertical-tabs/AllTabsData/Seven'
import Eight from '../vertical-tabs/AllTabsData/Eight';
import Nine from '../vertical-tabs/AllTabsData/Nine';
import ViewDemoButton from '~/middleware/new-customer-account/ViewDemoButton';
function VerticalTab2(props) {
  const { showComponents } = props;
  const [activeTab, setActiveTab] = useState("seven");
  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const tabs = ["seven", "eight", "nine"]; 

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
      <div class="plugin account_potential mb-4"><h2>PLUGIN WILL REFINE YOUR STORE</h2>
      <p className='mt-3'>Take advantage of the no additional cost features and plugins to make your Shopify store's customer account pages <span>truly unique and optimized  for your customers' needs.</span></p></div>
      <Tab.Container id="left-tabs-example" activeKey={activeTab} onSelect={handleTabSelect}>
      <Row className='align-items-center justify-content-between'>
        <Col lg={5} className='col-md-6'>
          <Nav variant="pills" className="flex-column" data-active-pil={activeTab}>
            <div className='nav-item-b-wrapper' data-active={activeTab}></div>
            {
              vTabData3.map((item, i) => {
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
            <Tab.Pane eventKey="seven"> <Seven/>  </Tab.Pane>
            <Tab.Pane eventKey="eight"> <Eight/> </Tab.Pane>
            <Tab.Pane eventKey="nine"> <Nine/> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
      <div className='mt-5'>
       <ViewDemoButton showComponents={showComponents} />
      </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default VerticalTab2