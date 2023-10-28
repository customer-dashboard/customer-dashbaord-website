import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import large_image from '../Assets/Images/Large_form.png';
import medium_image from '../Assets/Images/Medium_From.png';
import small_image from '../Assets/Images/Small_Form.png';
import dotted_image from '../Assets/Images/dotted_line_image.png';
import blue_rounded_image from '../Assets/Images/Blue_rounded_background.png';
import edit_Icon from '../Assets/Images/edit_icon.png';
import right_direction_dotted_img from '../Assets/Images/right-direction-dotted-img.png';
import right_dirdction_blue_image from '../Assets/Images/right-direction-blue-image.png';
import cart_Image from '../Assets/Images/second_section_images/Cart_icon.png';
import '../Assets/css/DashboardPotential.css';
import TabReuse from "./TabReuse";
function DashboardPotential(){
    const example = [
        {
             id:"1", 
             dotted_image:dotted_image, 
             blue_img:blue_rounded_image, 
             icon_img:edit_Icon,
             icon_title:"Streamlined profile",
             icon_discription:"It is a long established fact that a reader will be distracted by the readable....",
             right:false
        },
        {
             id:"2", 
             dotted_image:right_direction_dotted_img, 
             blue_img:right_dirdction_blue_image, 
             icon_img:cart_Image,
             icon_title:"Streamlined profile",
             icon_discription:"It is a long established fact that a reader will be distracted by the readable....",
             right:true
       },
       {
             id:"3",
             dotted_image:dotted_image, 
             blue_img:blue_rounded_image, 
             icon_img:edit_Icon,
             icon_title:"Streamlined profile",
             icon_discription:"It is a long established fact that a reader will be distracted by the readable....",
             right:false
       }
      
    ]
    const mystyle = {
        left:"-10px"
      };
      const  strem_line_profile={
        textAlign: 'end',
            right: "20px",
            top: "18px"
      };
    return(
        <>

        
        <section className="Dashboard_potential_background">
            <div className="Dashboard_potential">
                <Container>
                    <div className="parents_of-row">
                    <Row>
                        <Col lg={12}>
                            <div className="Dashboard_potential_heading_description">
                                <h2>WITH CUSTOMER DASHBOARD PRO, UNLEASH YOUR <span>ACCOUNT'S POTENTIAL.</span></h2>
                                <p>This Powerfull Shopify App allow you to Customiz your Customer's experience,allowning then to take advantages of additional features and benifits.</p>
                            </div>
                        </Col>
                    </Row>
                    {/* First Roe Closed */}
                    <Row>
                        <Col lg={6}>
                            <div className="image_first">
                                <div className="large_form"><Image src={large_image}></Image></div>
                                <div className="small_form"><Image src={small_image}></Image></div>
                                <div className="mrdium_form"><Image src={medium_image}></Image></div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="dynamic_tabs">
                            {example.map((item) => (
                                      <div className="tab_first" key={item.id}>
                                    <div className="dotted_img_parent">
                                        <Image src={item.dotted_image}></Image>
                                    </div>
                                   {
                                    item.id==2 ?  <div className="blue_back" style={mystyle}>
                                    <Image src={item.blue_img}></Image>
                                </div> :  <div className="blue_back" >
                                        <Image src={item.blue_img}></Image>
                                    </div>
                                   }
                                   
                                   {
                                    item.id==2 ?  <div className="strem_line_profile" style={strem_line_profile}>
                                    {!item.right ? 
                                    <div className="edit_icon_parent">
                                        <Image src={item.icon_img}></Image>
                                    </div> : ""}
                                    
                                    <div className="stream_discription">
                                        <span className="span_1">{item.icon_title}</span>
                                        <span className="span_2">{item.icon_discription}</span>
                                    </div>

                                    {item.right ? 
                                    <div className="edit_icon_parent">
                                        <Image src={item.icon_img}></Image>
                                    </div> : ""}

                                </div> :

                                 <div className="strem_line_profile">
                                        {!item.right ? 
                                        <div className="edit_icon_parent">
                                            <Image src={item.icon_img}></Image>
                                        </div> : ""}
                                        
                                        <div className="stream_discription">
                                            <span className="span_1">{item.icon_title}</span>
                                            <span className="span_2">{item.icon_discription}</span>
                                        </div>

                                        {item.right ? 
                                        <div className="edit_icon_parent">
                                            <Image src={item.icon_img}></Image>
                                        </div> : ""}

                                    </div>
                                   }
                                    
                                </div>
                                ))}


                            </div>
                        </Col>
                    </Row>
                    <TabReuse />
                
                    {/* Second Row Closed */}
                    </div>
                </Container>
            </div>
        </section>
        
        </>
    );
}

export default DashboardPotential;