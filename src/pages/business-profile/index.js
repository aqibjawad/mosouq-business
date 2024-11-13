import React from "react";

import { Row, Col } from "react-bootstrap";

import ProfileForm from "./profileForm1";
import InfoProfile from "./inforProfile";

const BusinessProfileSetup = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <Row>
        <Col lg={5} md={8} sm={12} style={{ maxHeight:"100vh", overflowY:"scroll" }}>
          <ProfileForm />
        </Col>

        <Col lg={7} md={8} sm={12}>
          <InfoProfile />
        </Col>
      </Row>
    </div>
  );
};

export default BusinessProfileSetup;
