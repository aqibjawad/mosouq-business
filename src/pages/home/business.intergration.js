import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { GET } from "../../apicontrollers/apiController";

const Integration = () => {

  const [companies, setCompanies] = useState([]);


  useEffect(() => {
    GET("integration-company/get-integ-companies").then((result) => {
      setCompanies(result);
    });
  }, []);

  return (
    <Container className="mt-5">
      <div style={{ textAlign: "center", fontWeight: "600", fontSize: "32px" }}>
        We Easily integrate with your existing tools
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#989898",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Intigrate any website build with MOSOUQ.
      </div>

      <div>
        <Marquee className="mt-4" gradient={false}>
          {companies?.map((integ, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{ margin: "0 2rem" }}
            >
              <img src={integ.integration_comp_image} alt="Logo 1" />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Integration;
