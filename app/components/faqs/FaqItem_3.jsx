import { Accordion } from 'react-bootstrap';
import LazyLoadedImage from '../lazyLoadImage/LazyLoadImage';

 export function FaqItem_3() {
  return (
<>

<Accordion.Item eventKey="3" className="mb-3 mt-3">
                                <Accordion.Header>3. How to activate Recently Viewed in your menu?</Accordion.Header>
                                <Accordion.Body>
                                <div className="accordian_index_2_data accordian_index_data">
                                        <div className="accordian_index_2_title">
                                          <p>A. Recently viewed will be off by default. </p></div>  
                                         <div className="manu_builder_list_steps mt-3">
                                              <p>B. To turn it on, go to the <strong>Recently Viewed</strong> menu in the Customer Dashboard app menu.</p>
                                              <LazyLoadedImage src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/recently-viewed-step-1.gif" alt="faq-gif" />
                                              
                                         </div>
                                         <div className="manu_builder_list_steps mt-4">
                                              <p>C. After clicking on the <strong>Recently viewed</strong> button, you can see its preview along with it, here you can also make other settings, after this click on the save button to save it and check it by going to the <strong>Menu builder</strong>.</p>
                                              <LazyLoadedImage src="https://mandasa1.b-cdn.net/customer-dashbaord-pro/recently-viewed-step-2.gif" alt="faq-gif" />
                                         </div>
                                         
                                       </div>
                                </Accordion.Body>
                            </Accordion.Item>

</>

)
}
