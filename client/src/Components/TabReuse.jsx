import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Image } from 'react-bootstrap';
import '../Assets/css/Tabs.css';
import '../Assets/css/TabsReuse.css';
import dotted_image from '../Assets/Images/dotted_line_image.png';
import blue_rounded_image from '../Assets/Images/leftActive.png';
import right_direction_dotted_img from '../Assets/Images/right-direction-dotted-img.png';
import right_dirdction_blue_image from '../Assets/Images/rightActive.png';
import edit_icon from '../Assets/Images/edit_icon_sv.svg';
import cart_icon from '../Assets/Images/cart_icon_sv.svg';
import location_icon from '../Assets/Images/location_icon_sv.svg'
import profile_icon from '../Assets/Images/profile_icon_sv.svg';
import color_changer_icon from '../Assets/Images/color_changer_iconsv.svg';
import eye_icon from '../Assets/Images/eye_icon.svg';
import React from 'react';
import Mobile_TabsReuse from './Mobile_TabsReuse';
import LeftinActiveImage from '../Assets/Images/leftInActive.png';
import RightInActiveImage from '../Assets/Images/rightInactive.png';
import { useState } from 'react';
import { TabReuseSection2 } from './TabReuseSection2';
import { TabReuseSection3 } from './TabReuseSection3';
import { TabReuseSection4 } from './TabReuseSection4';
import { TabReuseSection5 } from './TabReuseSection5';
import { TabReuseSection1 } from './TabReuseSection1';
import { TabReuseSection6 } from './TabReuseSection6';


export function TabReuseHeader() {
  return (
    <>
      <div className="plugin account_potential">
        <h2>WITH  CUSTOMER DASHBOARD PRO, UNLEASH YOUR <span>ACCOUNTS' POTENTIAL</span></h2>
        <p>This powerful Shopify App allows you to customize your customer's experience, allowing them to take advantage of additional features and benefits.</p>
      </div>
    </>
  );
}
function TabsReuse() {

  const example = [
    {
      id: 1,
      class: "tab_reuse_1",
      dotted_image: dotted_image,
      InActiveImage: LeftinActiveImage,
      blue_img: blue_rounded_image,
      icon_img: edit_icon,
      icon_title: "Streamlined profile",
      icon_discription: "Add custom fields to customer profiles to get specific info and know them better.",
      right: false,
      onchange: false,
      onToggle: "first",
      addclass: "my-class2 ",
      small_border_class: " small_border_class_right "
    },
    {
      id: 2,
      InActiveImage: RightInActiveImage,
      class: "tab_reuse_1",
      dotted_image: right_direction_dotted_img,
      blue_img: right_dirdction_blue_image,
      icon_img: cart_icon,
      icon_title: "Hassle-free reorder",
      icon_discription: "Customer can easily reoder via the enhanced order history.",
      right: true,
      onchange: false,
      onToggle: "second",
      addclass: "my-class ",
      small_border_class: " small_border_class_left "
    },
    {
      id: 3,
      InActiveImage: LeftinActiveImage,
      class: "tab_reuse_1",
      dotted_image: dotted_image,
      blue_img: blue_rounded_image,
      icon_img: location_icon,
      icon_title: "Multi address capability",
      icon_discription: "Let your customer easily add & edit addresses.",
      right: false,
      onchange: false,
      onToggle: "third",
      addclass: "my-class2 ",
      small_border_class: " small_border_class_right "
    }
  ]
  const example_1 = [
    {
      id: 1,
      InActiveImage: LeftinActiveImage,
      class: "tab_reuse_2",
      dotted_image: dotted_image,
      blue_img: blue_rounded_image,
      icon_img: profile_icon,
      icon_title: "Edit Profile",
      icon_discription: "Let your customer can easily edit personal information.",
      right: false,
      onToggle: "first",
      onchange: false,
      addclass: "my-class2 ",
      small_border_class: " small_border_class_right "
    },
    {
      id: 2,
      InActiveImage: RightInActiveImage,
      class: "tab_reuse_2",
      dotted_image: right_direction_dotted_img,
      blue_img: right_dirdction_blue_image,
      icon_img: color_changer_icon,
      icon_title: "Revamp panel",
      icon_discription: "Change color palette of customer account page to match it with your brand.",
      right: true,
      onchange: false,
      onToggle: "second",
      addclass: "my-class ",
      small_border_class: " small_border_class_left "
    },
    {
      id: 3,
      InActiveImage: LeftinActiveImage,
      class: "tab_reuse_2",
      dotted_image: dotted_image,
      blue_img: blue_rounded_image,
      icon_img: eye_icon,
      icon_title: "Showcase recently visited products",
      icon_discription: "Display a list of products recently viewed by the customer, making it convenient for them to revisit items of interest.",
      right: false,
      onchange: false,
      onToggle: "third",
      addclass: "my-class2 ",
      small_border_class: " small_border_class_right "
    }
  ]
  const [activeHeader, setActiveHeader] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHeaderClick = (index__1) => {
    setActiveHeader(index__1);
    console.log(index__1);
    setIsActive(!isActive);
  };
  const [activeHeader2, setActiveHeader2] = useState(false);
  const handleHeaderClick2 = (index__2) => {
    setActiveHeader2(index__2);
    console.log(index__2);
  };
  
  return (
    <>
      <section className='tabs_reuse_section'>
        <div className="my-all-tabs accordian_section_withreuse">
          <div className="container">
            <TabReuseHeader />
            <Tab.Container id="left-tabs-example" defaultActiveKey="0_index">
              <Row className="align-items-center mt-5">
                <Col md={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="0_index" >
                      <TabReuseSection1 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1_index">
                      <TabReuseSection2 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2_index">
                      <TabReuseSection3 />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col md={6}>
                  <Nav variant="pills" className="flex-column">
                    {
                      example.map((item, i) => {
                        const index = i + "_index";
                        return (
                          <Nav.Item className='first_1'>
                            <Nav.Link href="javascript:void(0)" eventKey={index} className="nav__links__" onClick={() => handleHeaderClick(i)}>
                              <div className={' first_tab ' + item.small_border_class}>
                                <div className="all">
                                  {
                                    activeHeader === i | index === "0_index"?
                                      <Image src={item.blue_img} className=' blue_rounded_img second-id-img'></Image> :
                                      <Image src={item.InActiveImage} className="blue_rounded_img"></Image>
                                  }

                                  {item.id === 2 ?
                                    <div className="first_tab_contetnt flex-end right-direction">
                                      <div className="tab-icon-content col-7 last">
                                        <h4>{item.icon_title}</h4>
                                        <p>{item.icon_discription}</p>
                                      </div>
                                      <div className="tab-icon col-2 icon-first">
                                        <Image src={item.icon_img}></Image>
                                      </div>
                                    </div> :
                                    <div className="first_tab_contetnt">
                                      <div className="tab-icon col-2">
                                        <Image src={item.icon_img}></Image>
                                      </div>
                                      <div className="tab-icon-content col-7">
                                        <h4>{item.icon_title}</h4>
                                        <p>{item.icon_discription}</p>
                                      </div>
                                    </div>
                                  }
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
            <Tab.Container id="left-tabs-example" defaultActiveKey="0_index">
              <Row className="align-items-center mt-5">
                <Col md={6}>
                  <Nav variant="pills" className="flex-column">
                    {
                      example_1.map((item, i) => {
                        const index = i + "_index";
                        return (
                          <Nav.Item className='first_1'>
                            <Nav.Link eventKey={index} className="nav__links__" onClick={() => handleHeaderClick2(i)}>
                              <div className={' first_tab ' + item.small_border_class}>
                                <div className="all">
                                  {
                                    activeHeader2 === i | index == "0_index"?
                                      <Image src={item.blue_img} className="blue_rounded_img second-id-img"></Image> :
                                      <Image src={item.InActiveImage} className="blue_rounded_img"></Image>
                                  }
                                  {item.id === 2 ?
                                    <div className="first_tab_contetnt flex-end right-direction">
                                      <div className="tab-icon-content col-7 last">
                                        <h4>{item.icon_title}</h4>
                                        <p>{item.icon_discription}</p>
                                      </div>
                                      <div className="tab-icon col-2 icon-first">
                                        <Image src={item.icon_img}></Image>
                                      </div>
                                    </div> :
                                    <div className="first_tab_contetnt">
                                      <div className="tab-icon col-2">
                                        <Image src={item.icon_img}></Image>
                                      </div>
                                      <div className="tab-icon-content col-7">
                                        <h4>{item.icon_title}</h4>
                                        <p>{item.icon_discription}</p>
                                      </div>
                                    </div>
                                  }
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                        )
                      })
                    }
                  </Nav>
                </Col>
                <Col md={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="0_index" >
                      <TabReuseSection6 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1_index">
                      <TabReuseSection4 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2_index">
                      <TabReuseSection5 />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
        <div className="new_tab_section_for_mobie_block">
          <Mobile_TabsReuse name={example} TabReuseHeaderData={TabReuseHeader()}/>
          <Mobile_TabsReuse name={example_1} />
        </div>
      </section>
    </>
  );
}

export default TabsReuse;