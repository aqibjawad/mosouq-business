import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Error = () => {
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          md={6}
          style={{ textAlign: "center", justifyItem: "center", paddingTop:"25rem" }}
        >
          <div
            style={{ color: "#061C3D", fontWeight: "700", fontSize: "56px" }}
          >
            Oops! Page not found
          </div>

          <div
            style={{ color: "#061C3D", fontWeight: "400", fontSize: "20px" }}
          >
            Something went wrong. It’s look that your requested could not be
            found. It's look like the link is broken or the page is removed.
          </div>

          <Row>
          <Col>
            <button className="mt-4" style={{backgroundColor:"#0B63E5", padding:"0px, 32px, 0px, 32px",borderRadius:"7px", color:'white', width:"Hug (165px)"}}>
                Go Back
            </button>
          </Col>

          <Col>
            <button className="mt-4" style={{backgroundColor:"white", padding:"0px, 32px, 0px, 32px", borderRadius:"7px", color:'#0B63E5', width:"Hug (165px)"}}>
                Home
            </button>
          </Col>
        </Row>
        </Col>

        <Col lg={6} md={6}>
          <img src="404.jpeg" style={{ width: "100%", height: "989px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
