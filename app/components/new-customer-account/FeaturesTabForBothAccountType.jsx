
import { HomePageFeatures, FeaturedData, homePageHeadings } from '../../middleware/FeaturedContentDataM';
import FeaturesContent from '../../components/new-customer-account/FeaturesContent';
import { Tab, Tabs } from 'react-bootstrap';
import parse from 'html-react-parser';

function FeaturesTabForBothAccountType() {

    
  return (
    <>
    
    <section className="main-container-for-pndin pt-5 pb-5 integration-partner-tab-key homepage_features_tabs__">
        <div className="container">
          <div className="partners-integrations-main-content-wraper pt-4">
            <div className='section-4-main-heading feature-com-head'>
                <h2 className='fw-600'>{parse(homePageHeadings[0].heading)}</h2>
                <p className='mt-4 feature-com-subhead'>{parse(homePageHeadings[0].subheading)}</p>
            </div>
            <Tabs
              defaultActiveKey="New Customer Account"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="New Customer Account" title="New Customer Account" className="tab-1__">
              <FeaturesContent features={HomePageFeatures} />
              </Tab>
              <Tab eventKey="Legacy customer accounts" title="Legacy customer accounts" className="tab-2__">
              <FeaturesContent features={FeaturedData} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    
    </>
  );
}

export default FeaturesTabForBothAccountType;