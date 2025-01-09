import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";

export default function CustomSection() {
  return (
    <section className="custom-secton">
      <div className="container">
        <div className="">
          <h2 className="text-center account-heading ">Accounts</h2>
          <h4 className=" account-subheading text-center mt-3">
            Classic Account: Essential features for everyday banking. Premium
            Account: Exclusive benefits for a superior experience.
          </h4>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-6">
              <div className="text-center">
                <button className="classic-account-btn ">
                  Classic Account
                </button>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center">
                <button className="classic-account-btn ">
                  Premium Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
