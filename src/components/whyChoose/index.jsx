import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "./whyChoose.css";
const WhyChoose = () => {
  return (
    <div id="why_choose" className="  py-5">
      <div className=" text-center mb-5">
        <h2>Why Mosouq?</h2>
        <p className="about-subhead">
          Why sign up for a free account at Mosouq
        </p>
      </div>
      <Row className=" g-4">
        <Col lg={3}>
          <Card className=" w-100  m-0 text-center p-4 choose_card">
            <div>
              <Image src={"/rotate.png"} />
            </div>
            <div className=" pt-4">
              <h5>Should i request a demo</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
                mole
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="text-center w-100  m-0  p-4 choose_card">
            <div>
              <Image src={"/chats.png"} />
            </div>
            <div className=" pt-4">
              <h5>What happens next</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
                mole
              </p>
            </div>
          </Card>
        </Col>{" "}
        <Col lg={3}>
          <Card className="text-center w-100 p-4  m-0  choose_card">
            <div>
              <Image src={"/exports.png"} />
            </div>
            <div className=" pt-4">
              <h5>What can i expect</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
                mole
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="text-center w-100 m-0  p-4 choose_card">
            <div>
              <Image src={"/review.png"} />
            </div>
            <div className=" pt-4">
              <h5>Are there any onligations</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
                mole
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChoose;
