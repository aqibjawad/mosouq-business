import React, { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { GET } from "../../apicontrollers/apiController";

import "./index.css";

import { Row, Col, Card } from "react-bootstrap";

import PropertyDetails from "../businessDetails/index"


const BusinessHome = () => {
  const token = localStorage.getItem("token");
  const data = jwtDecode(token);

  const dataId = data._id.split(":")[0];

  const [profileData, setProfileData] = useState();

  

  useEffect(() => {
      GET(`business-profile/profile/${dataId}`).then((result) => {
        setProfileData(result);
      });
  }, [dataId]);

  return (
    <div>
      <div className="business-tag-line">
        Here's the latest overview for <span className="mosouq-name"> {profileData?.businessName} </span> 
      </div>

      <div className="border"></div>

      <Row className="mb-5">
        <Col className="mt-5" lg={12}>
          <PropertyDetails />
        </Col>
      </Row>
    </div>
  );
};

export default BusinessHome;
