import React from "react";
import { useEffect } from "react";
import Integration from "../partner-and-integration/Integration";
import { Tabs, Tab } from "react-bootstrap";
import { partnerData } from "../../middleware/IntegrationsData";
import { integrationdata } from "../../middleware/IntegrationsData";
import TransitionEffect from "../FadeTransition/TransitionEffect";
function IntegrationsAndPartners({data, heading}) {
  useEffect(() => {
   TransitionEffect();
  }, []);

  return (
    <>
      <section className="main-container-for-pndin pt-5 pb-5 integration-partner-tab-key">
        <div className="container">
          <div className="partners-integrations-main-content-wraper pt-4">
            <div className="p-i-h text-center mb-5 pb-3">
              <h1 className="fw-600">{heading}</h1>
            </div>
            <Integration data={data}/>
            {/* <Tabs
              defaultActiveKey="Partners"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="Partners" title="Partners" className="tab-1__">
              <Integration data={partnerData}/>
              </Tab>
              <Tab eventKey="Integrations" title="Integrations" className="tab-2__">
              <Integration data={integrationdata}/>
              </Tab>
            </Tabs> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default IntegrationsAndPartners;
