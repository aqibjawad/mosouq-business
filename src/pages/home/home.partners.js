import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import {GET} from "../../apicontrollers/apiController"

const HomeBusiness = () => {

  const [companies, setCompanies] = useState([]);

  const fetchData = async () => {
    GET("business-company/get-business-companies").then((result) => {
      setCompanies(result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="logos-carousel">
      <Container>
        <div style={{ marginTop: "3rem" }}>
          <div
            className="text-center"
            style={{ fontWeight: "600", fontSize: "32px" }}
          >
            Trusted by the biggest companies
          </div>

          <div
            className="text-center"
            style={{ fontWeight: "400", fontSize: "17px" }}
          >
            We're not just a service provider; we're your trusted partner,
            dedicated to understanding and <br /> surpassing your expectations
            with tailored solutions
          </div>
        </div>

        <div>
          <Marquee
            className="mt-5"
            gradient={false}
            style={{ overflow: "hidden" }}
          >
            {companies.map((announcementts, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center"
                style={{ margin: "0 5rem" }}
              >
                <img
                  style={{ maxWidth: "100%" }}
                  src={announcementts?.business_com_image}
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

export default HomeBusiness;
