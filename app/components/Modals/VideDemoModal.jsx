import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function RedioCardModal({ AccountType, onSubjectChange, heading, imgUrl, imgAlt }) {
    const [selectedSubject, setSelectedSubject] = useState(AccountType);
    const SvgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><g id="Interface / External_Link"><path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
    const handleChange = (event) => {
      const selected = event.target.value;
      setSelectedSubject(selected);
      onSubjectChange(selected); 
      console.log("selectedSubject",event); // Pass the selected subject back to parent component
    };
   
    const getButtonUrl = () => {
      return `${selectedSubject}`;  // Assuming URL format depends on AccountType
    };
  
    return (
      <div className="main-container">
        <div className="radio-buttons">
          <label className="custom-radio">
            <input
              type="radio"
              name="radio"
              value={AccountType}
              checked={selectedSubject === AccountType}
              onChange={handleChange}
            />
            <span className="radio-btn">
              <i className="las la-check"></i>
              <div className="hobbies-icon">
                <img
                  src={imgUrl}
                  alt={imgAlt}
                  title={imgAlt}
                />
                <h3>{heading}</h3>
              </div>
            </span>
          </label>
          <div className="modal_query_button">
          <Button target="_blank" variant="plain" href={getButtonUrl()}>
            <span>{SvgIcon}  </span><span>View Demo</span>
          </Button>
          </div>
        </div>
      
      </div>
    );
  }

function ModalSelectCard() {
    const [selectedSubject, setSelectedSubject] = useState(null);
  
    const handleSubjectChange = (subject) => {
      setSelectedSubject(subject);
    };
  
    return (
      <div id="customer_account_type_modal_selection">
        <div className="customer_account_type_container">
          <div className="customer_account_type_wraper">
            <div className="customer_account_type_grid">
              <Row>
                <Col lg={6}>
                  <div className="customer_type-classic">
                    <RedioCardModal 
                      AccountType="https://customer-dashboard.myshopify.com/" 
                      heading="Classic Customer Account"
                      onSubjectChange={handleSubjectChange}
                      imgAlt="Classic Customer Account Demo Store"
                      imgUrl = "https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/old%20(2).png"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="customer_type_new_account">
                    <RedioCardModal 
                      AccountType="https://shopify.com/73535684832/account" 
                      heading="New Customer Account"
                      onSubjectChange={handleSubjectChange} 
                      imgAlt="New Customer Account Demo Store"
                      imgUrl = "https://mandasa1.b-cdn.net/customer%20dashboard%20website/new%20customer%20account%20images/new%20(2).png"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }

export function VideDemoModal(props) {
  return (
    <Modal
      {...props} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen='md-down'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Choose which version of <span style={{color:"#eb4503", fontWeight:"bold"}}>Customer Account</span> you are using.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalSelectCard/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn header_btn  btn btn-primary account_type_footer_button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
