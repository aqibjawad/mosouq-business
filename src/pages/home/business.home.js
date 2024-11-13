import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

import SearchBar from "../../components/searchbar";

const BusinessHeader = () => {
  return (
    <Container fluid className=" px-3  mt-5 pt-4 px-md-5">
      <div className=" pt-5">
        <Row className="align-items-center  g-5">
          <Col lg={7} md={6} sm={12}>
            <div className="banner-text ">
              Your Online <br />{" "}
              <span style={{ color: "#404EED" }}> Advertising </span> Solution
            </div>

            <div className="banner-descrp">
              Get your business advertise by Your Trusted Companion & get
              reviews by consumers
            </div>

            <SearchBar />
          </Col>

          <Col lg={5} md={6} sm={12} className="d-flex justify-content-center">
            <div className="home_right">
              <img
                src="/banner.png"
                alt="Outer"
                className="img-fluid w-100"
              />

              <div className="home_review">
                <img src={"/home_review.png"} alt="" />
              </div>
              <div className="home_review2">
                <img src={"/security.png"} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BusinessHeader;
