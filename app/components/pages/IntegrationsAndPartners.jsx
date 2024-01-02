import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import Integration from "../partner-and-integration/Integration";
import { Tabs, Tab } from "react-bootstrap";
import { partnerData } from "../../middleware/IntegrationsData";
import { integrationdata } from "../../middleware/IntegrationsData";
function IntegrationsAndPartners() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    Aos.refreshHard();
  }, []);

  return (
    <>
      <section className="main-container-for-pndin pt-5 pb-5 integration-partner-tab-key">
        <div className="container">
          <div className="partners-integrations-main-content-wraper pt-4">
            <div className="p-i-h text-center mb-5 pb-3">
              <h1 className="fw-600">Integrations & partners</h1>
            </div>
            <Tabs
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
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default IntegrationsAndPartners;
