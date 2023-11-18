import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import '../Assets/css/Tabs.css';
import dotted_image from '../Assets/Images/dotted_line_image.png';
import blue_rounded_image from '../Assets/Images/leftActive.png';
import right_direction_dotted_img from '../Assets/Images/rightActive.png';
import right_dirdction_blue_image from '../Assets/Images/rightActive.png';
import Color_Change_Image from '../Assets/Images/second_section_images/color_change_image.png';
import hamburger_image from '../Assets/Images/hamburger_icon.svg';
import language_selector_icon from '../Assets/Images/language_selector.svg';
import LeftinActiveImage from '../Assets/Images/leftInActive.png';
import RightInActiveImage from '../Assets/Images/rightInactive.png';
import React from 'react';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Mobile_TabsReuse from './Mobile_TabsReuse';
import { TabsSection3 } from './TabsSection3';
import { TabsSection1 } from './TabsSection1';
import { TabSection2 } from './TabSection2';

export function TabHeader(){
  return(
    <>
    <div className="plugin">
            <h2>PLUGIN WILL REFINE YOUR STORE</h2>
            <p>Take advantage of the no additional cost features and plugins to make your Shopify store's
              customer account pages <span>truly unique and optimized</span> for your customers' needs.</p>
          </div>
    </>
  );
}

export function Tabs() {
  const example = [
    {
      id: 1,
      item_id_active_1: true,
      InActiveImage: LeftinActiveImage,
      class: "Tabs",
      dotted_image: dotted_image,
      blue_img: blue_rounded_image,
      icon_img: hamburger_image,
      icon_title: "Navigation Builder",
      icon_discription: "Include personalized menus for Shopify pages, external links, and the seamless integration of third-party apps.",
      right: false,
      onchange: false,
      onToggle: "first",
      addclass: "my-class2 ",
      small_border_class: " small_border_class_right "
    },
    {
      id: 2,
      InActiveImage: RightInActiveImage,
      class: "Tabs",
      dotted_image: right_direction_dotted_img,
      blue_img: right_dirdction_blue_image,
      icon_img: Color_Change_Image,
      icon_title: "Brand-focused Sensibility",
      icon_discription: "Tailor the customer account page to align with your brand UI.",
      right: true,
      onchange: false,
      onToggle: "second",
      addclass: "my-class ",
      small_border_class: " small_border_class_left "
    },
    {
      id: 3,
      InActiveImage: LeftinActiveImage,
      class: "Tabs",
      dotted_image: dotted_image,
      blue_img: blue_rounded_image,
      icon_img: language_selector_icon,
      icon_title: "Multi Languages Support",
      icon_discription: "Translate the content of all features provided by our app in the event that you are using multiple languages.",
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

  return (
    <section className='tabs_section'>
      <div className="my-all-tabs">
        <div className="container">
          <TabHeader/>
          <Tab.Container id="left-tabs-example" defaultActiveKey="0_index">
            <Row className="align-items-center">
              <Col md={6}>
                {
                  <Tab.Content>
                    <Tab.Pane eventKey="0_index" >
                      <TabsSection1 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1_index">
                      <TabSection2 />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2_index">
                      <TabsSection3 />
                    </Tab.Pane>
                  </Tab.Content>
                }
              </Col>
              <Col md={6}>
                <Nav variant="pills" className="flex-column">

                  {
                    example.map((item, i) => {
                      const index = i + "_index";
                      return (
                        <Nav.Item className='first_1' key={index}>
                          <Nav.Link eventKey={index} className="nav__links__" onClick={() => handleHeaderClick(i)}>
                            <div className={' first_tab ' + item.small_border_class}>
                              <div className="all">
                                {
                                    activeHeader === i | index === "0_index"?
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

            </Row>
          </Tab.Container>
        </div>
      </div>
      <div className="success_1">
        <Mobile_TabsReuse name={example} TabHeaderData={TabHeader()}/>
      </div>
    </section>

  );
}
