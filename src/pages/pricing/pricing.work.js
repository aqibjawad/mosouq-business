import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
const WhyChoose = () => {
  return (
    <div id="why_choose" className="  py-5">
       <Container fluid className=" px-3 px-md-5">
       <div className=" text-center mb-5">
        <h2>How our pricing works</h2>
        <p className="fs-5">
        Why sign up for a free account at Mosouq
        </p>
      </div>
      <Row className=" g-4">
        <Col lg={3}>
          <Card className=" w-100  m-0 text-center px-3 py-4 choose_card">
            <div>
              <Image src={"/phonebook-4-icon 1.png"} />
            </div>
            <div className=" pt-4">
              <h5>Choose Your Plan</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst mole
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="text-center w-100  m-0  px-3 py-4  choose_card">
            <div>
              <Image src={"/laptop-online.png"} />
            </div>
            <div className=" pt-4">
              <h5>Confirm your Domains</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst mole
              </p>
            </div>
          </Card>
        </Col>{" "}
        <Col lg={3}>
          <Card className="text-center w-100 px-3 py-4   m-0  choose_card">
            <div>
              <Image src={"/web-traffic-icon.png"} />
            </div>
            <div className=" pt-4">
              <h5  className="">Assess Website Traffic</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
                mole
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="text-center w-100 m-0  px-3 py-4  choose_card">
            <div>
              <Image src={"/quote-request.png"} />
            </div>
            <div className=" pt-4">
              <h5>Recieve a Quote</h5>
              <p>
              Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst mole
              </p>
            </div>
          </Card>
        </Col>
      </Row>
       </Container>
    </div>
  );
};

export default WhyChoose;
