import React from "react";

import "./index.css";

import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <Container fluid className=" px-3 py-5  px-md-5">
      <h1 className="text-center mt-5">
        MOSOUQ. Provides free and paid online advertising
      </h1>

      <div className="descrp">
        We're not just a service provider; we're your trusted partner, dedicated
        to understanding and surpassing your expectations with tailored
        solutions
      </div>

      <div>
        <Row className=" g-5 mt-3">
          <Col className="mt-5" lg={6} md={6} sm={12}>
            <Row className="business_features  rounded-4">
              <Col lg={6} className=" p-0">
                <div className=" bg-white rounded-4 business_features_left p-3">
                  <div>
                    <span>Business page</span>
                    <h2 className=" pt-2">Help people get to know you</h2>
                  </div>
                  <div>
                    <p className=" pt-2">
                      Having a strong presence on Mosouq helps you establish
                      trust with potential customers. Manage your page for free
                      or upgrade to stand out from the competition
                    </p>
                  </div>
                  <div>
                    <button className="business-button-header-demo mt-3">
                      <Link style={{ textDecoration: "none", color: "white" }}>
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className=" pt-5">
                  <span className=" right_content">What’s included</span>
                  <ul className=" mt-4 business_btn p-0">
                    <li className=" d-flex  mt-3">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">
                        Update your business info so people can find you.
                      </p>
                    </li>
                    <li className="  mt-3 d-flex ">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">
                        Update your business info so people can find you.
                      </p>
                    </li> 
                    <li className="  mt-3 d-flex ">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">
                        Update your business info so people can find you.
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="mt-5" lg={6} md={6} sm={12}>
            <Row className="business_features    rounded-4">
              <Col lg={6} className=" p-0">
                <div className=" bg-white rounded-4  business_features_left p-3">
                  <div>
                    <span>Mosouq Ads</span>
                    <h2 className=" pt-2">Get 2.5x more leads with Ads</h2>
                  </div>
                  <div>
                    <p className="">
                      Get in front of more customers when they’re searching for
                      local businesses like yours.
                    </p>
                  </div>
                  <div>
                    <button className="business-button-header-demo mt-3">
                      <Link style={{ textDecoration: "none", color: "white" }}>
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className=" pt-5">
                  <span className=" right_content">What’s included</span>
                  <ul className=" mt-4 business_btn p-0">
                    <li className=" d-flex  mt-3">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">
                        Prominent display on search and competitors’ pages.
                      </p>
                    </li>
                    <li className="  mt-3 d-flex ">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">Target by location & keyword</p>
                    </li>
                    <li className="  mt-3 d-flex ">
                      <div className=" m-2">
                        <img src="/Check Circle blue.png" />
                      </div>
                      <p className=" m-0">
                        Only pay when interested people click on your ad
                      </p>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Advertisement;
