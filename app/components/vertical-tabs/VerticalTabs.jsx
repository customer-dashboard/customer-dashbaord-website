import { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import {vTabData, vTabData2} from '../vertical-tabs/VerticalTabsData';
import TabOne  from '../vertical-tabs/AllTabsData/TabOne'
import TabTwo from '../vertical-tabs/AllTabsData/TabTwo';
import TabThree from '../vertical-tabs/AllTabsData/TabThree';
import TabFourth from '../vertical-tabs/AllTabsData/TabFourth';
import TabFifth from '../vertical-tabs/AllTabsData/TabFifth';
import TabSix from '../vertical-tabs/AllTabsData/TabSix';
import ViewDemoButton from '~/middleware/new-customer-account/ViewDemoButton';
function VerticalTabs(props) {
  const { showComponents } = props;
  const [activeTab, setActiveTab] = useState("first");
  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const [activeTab1, setActiveTab1] = useState("fourth");
  const handleTabSelect1 = (eventKey) => {
    setActiveTab1(eventKey);
  };
  const tabs = ["first", "second", "third"]; // Tab list for activeTab
  const tabs1 = ["fourth", "fifth", "six"]; // Tab list for activeTab1

  useEffect(() => {
    // Interval to change activeTab every 2 seconds
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });

      setActiveTab1((prevTab1) => {
        const currentIndex = tabs1.indexOf(prevTab1);
        const nextIndex = (currentIndex + 1) % tabs1.length;
        return tabs1[nextIndex];
      });
    }, 4000); // Change both tabs every 2 seconds

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [tabs, tabs1]);
  return (
    <>
    <section className='vertical-tab--wraper'>
    <div className="vertical-tabs">
      <div className="container">
      <div class="plugin account_potential mb-4"><h2>WITH  CUSTOMER DASHBOARD PRO, UNLEASH YOUR  <span className='new_color'>ACCOUNTS' POTENTIAL</span></h2>
      <p className='mt-3'>This powerful Shopify App allows you to customize your customer's experience, allowing them to take advantage of additional features and benefits.</p></div>
      <Tab.Container id="left-tabs-example" activeKey={activeTab} onSelect={handleTabSelect}>
      <Row className='align-items-center justify-content-between'>
        <Col lg={5} className='col-md-6'>
          <Nav variant="pills" className="flex-column" data-active-pil={activeTab}>
            <div className='nav-item-b-wrapper' data-active={activeTab}></div>
            {
              vTabData.map((item, i) => {
                return (
                  <Nav.Item key={i}>
                    <Nav.Link className={item.tClassName} eventKey={item.tEventKey}>
                        <div className="v-tab-h-container align-items-center d-flex c-fff">
                        <div className="vtab-icon">{item.icon}</div>
                        <div className="nav-items-el">
                          <h3 className='new_color'>{item.tHeading}</h3>
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
            <Tab.Pane eventKey="first"> <TabOne/>  </Tab.Pane>
            <Tab.Pane eventKey="second"> <TabTwo/> </Tab.Pane>
            <Tab.Pane eventKey="third"> <TabThree/> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>


     <div className="second-panel pt-5">
     <Tab.Container id="left-tabs-example" activeKey={activeTab1} onSelect={handleTabSelect1}>
      <Row className='align-items-center justify-content-between'>
      <Col lg={6} className='col-md-6'>
          <Tab.Content>
            <Tab.Pane eventKey="fourth"> <TabFourth/>  </Tab.Pane>
            <Tab.Pane eventKey="fifth"> <TabFifth/> </Tab.Pane>
            <Tab.Pane eventKey="six"> <TabSix/> </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col lg={5} className='col-md-6'>
          <Nav variant="pills" className="flex-column">
            <div className='nav-item-b-wrapper' data-active={activeTab1}></div>
            {
              vTabData2.map((item, i) => {
                return (
                  <Nav.Item key={i}>
                    <Nav.Link className={item.tClassName} eventKey={item.tEventKey}>
                        <div className="v-tab-h-container align-items-center d-flex c-fff">
                        <div className="vtab-icon">{item.icon}</div>
                        <div className="nav-items-el">
                          <h3 className='new_color'>{item.tHeading}</h3>
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
      </Row>
      </Tab.Container>
     </div>
      <div className='mt-5'>
       <ViewDemoButton showComponents={showComponents} />
      </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default VerticalTabs