import { Image, Container, Nav, Row } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { useState } from 'react';

import { TabReuseSection1 } from './TabReuseSection1';
import { TabReuseSection2 } from './TabReuseSection2';
import { TabReuseSection3 } from './TabReuseSection3';
import { TabReuseSection4 } from './TabReuseSection4';
import { TabReuseSection5 } from './TabReuseSection5';
import { TabReuseSection6 } from './TabReuseSection6';
import { TabSection2 } from './TabSection2';
import { TabsSection1 } from './TabSection1';
import { TabsSection3 } from './TabSection3';


function Mobile_TabsReuse(props) {
  const { name,TabReuseHeaderData,TabHeaderData } = props;
  const item_id_2 = {
    "right": "20px",
    "width": "80%",
    "marginLeft": "auto"
  }
  const [activeHeader, setActiveHeader] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHeaderClick = (index__1) => {
    setActiveHeader(index__1);
    console.log(index__1);
    setIsActive(!isActive);
  };
  const TabReuseSection_1 = TabReuseSection1();
  const TabReuseSection_2 = TabReuseSection2();
  const TabReuseSection_3 = TabReuseSection3();
  const TabReuseSection_4 = TabReuseSection4();
  const TabReuseSection_5 = TabReuseSection5();
  const TabReuseSection_6 = TabReuseSection6();

  const TabSection_1 = TabsSection1();
  const TabSection_2 = TabSection2();
  const TabSection_3 = TabsSection3();

  return (
    <>
      <section className="faq-section_1">
        <div className="faq mobile_tab_reuse_padding">
          <Container>
            {
              TabReuseHeaderData
            }
            {
              TabHeaderData
            }
            <div className="faq_Container">
              <Accordion >

                {
                  name.map((item, i) => {
                    const index = i + "_index";
                    return (
                      <Accordion.Item eventKey={index} key={index} className="mb-3 mt-3  main_item_original">
                        <div className={'main_item' + item.small_border_class} >
                          {/* <Accordion.Header onClick={() => TogleHendleChange(item.onToggle)}> */}
                          <Accordion.Header onClick={() => handleHeaderClick(i)}>
                            <Nav.Item className=''>
                              <Nav.Link eventKey={index} className="" >
                                <div className="">
                                  <div className="main_item_accourdian" >
                                    {
                                      activeHeader === i && isActive ?
                                        <div className="s">  <Image src={item.blue_img} className=""></Image></div> :
                                        <div className="ss"> <Image src={item.InActiveImage} className=""></Image></div>
                                    }
                                    {item.id === 2 ?
                                      <div className="item_content item_content-2" style={item_id_2}>
                                        <div className="item_discription item_discription-2">
                                          <h4>{item.icon_title}</h4>
                                          <p>{item.icon_discription}</p>
                                        </div>
                                        <div className="item_icon_logo">
                                          <Image src={item.icon_img}></Image>
                                        </div>
                                      </div> :
                                      <div className="item_content">
                                        <div className="item_icon_logo">
                                          <Image src={item.icon_img}></Image>
                                        </div>
                                        <div className="item_discription">
                                          <h4>{item.icon_title}</h4>
                                          <p>{item.icon_discription}</p>
                                        </div>
                                      </div>
                                    }
                                  </div>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                          </Accordion.Header>
                          <Accordion.Body activekey={index} >
                            <Row>
                              {
                                item.id === 1 && item.class === "Tabs" ? TabSection_1 : item.id === 2 && item.class === "Tabs" ? TabSection_2 : item.id === 3 && item.class === "Tabs" ? TabSection_3 : ""
                              }
                              {
                                item.id === 1 && item.class === "tab_reuse_1" ? TabReuseSection_1 : item.id === 2 && item.class === "tab_reuse_1" ? TabReuseSection_2 : item.id === 3 && item.class === "tab_reuse_1" ? TabReuseSection_3 : ""
                              }
                              {
                                item.id === 1 && item.class === "tab_reuse_2" ? TabReuseSection_6 : item.id === 2 && item.class === "tab_reuse_2" ? TabReuseSection_4 : item.id === 3 && item.class === "tab_reuse_2" ? TabReuseSection_5 : ""
                              }

                            </Row>
                          </Accordion.Body>
                        </div>
                      </Accordion.Item >
                    )
                  })
                }

              </Accordion>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}


export default Mobile_TabsReuse;