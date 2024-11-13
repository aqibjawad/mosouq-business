import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Marquee from "react-fast-marquee";

const Consumers = () => {
  const logo = [
    "/company_logo1.png",
    "/company_logo2.png",
    "/Company Logo.png",
    "/company_logo3.png",
    "/company_logo4.png",
    "/company_logo5.png",
    "/company_logo6.png",
  ]
  return (
    <div className="" style={{ backgroundColor: "#FBFBFF" }}>
      <Container fluid className=" px-3 py-5  px-md-5">
        <div
          style={{ textAlign: "center", fontWeight: "600", fontSize: "40px" }}
        >
          Why Consumers rely on Mosouq.
        </div>

        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          We're not just a service provider; we're your trusted partner,
          dedicated to understanding and surpassing your expectations with
          tailored solutions
        </div>

        <Row className="mt-5">
          <Col lg={4} md={4} sm={12}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <p style={{ fontWeight: 700, fontSize: "73px", margin: 0 }}>
                238
              </p>
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "600",
                  fontSize: "28.5px",
                }}
              >
                + million
              </span>
            </div>

            <div
              styke={{
                textAlign: "justify",
                color: "#747474",
                fontSize: "25px",
                fontWeight: "400",
              }}
            >
              Rebiews in total across +980.000 domains
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <p style={{ fontWeight: 700, fontSize: "73px", margin: 0 }}>85</p>
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "600",
                  fontSize: "28.5px",
                }}
              >
                % percent
              </span>
            </div>

            <div
              styke={{
                textAlign: "justify",
                color: "#747474",
                fontSize: "25px",
                fontWeight: "400",
              }}
            >
              of us consumers sirved in 2024 agree that a good mosouq. score
              makes them more likely to buy from abrand
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <p style={{ fontWeight: 700, fontSize: "73px", margin: 0 }}>76</p>
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "600",
                  fontSize: "28.5px",
                }}
              >
                + million
              </span>
            </div>

            <div
              styke={{
                textAlign: "justify",
                color: "#747474",
                fontSize: "21px",
                fontWeight: "400",
              }}
            >
              Reviews were written on Mosouq. in 2024
            </div>
          </Col>
        </Row>

        <div>
          <Marquee
            className="mt-4"
            gradient={false}
            style={{ overflow: "hidden" }}
          >
            {logo?.map((announcementts, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center"
                style={{ margin: "0 2rem" }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    height: "56px",
                    width: "112px",
                   
                  }}
                  src={announcementts}
                  alt="Logo 1"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default Consumers;
