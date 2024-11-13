import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./index.css"

const ContactForm = () => {
  return (
    <div className="contact-right">
      <form> 
        <Row className="">
          <Col>
            <input
              style={{ width: "100%" }}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Col>

          <Col>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={{ width: "100%", marginTop: "2rem" }}
        />

        <Row>
          <Col>
            <input
              type="text"
              name="country"
              placeholder="Country"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </Col>

          <Col>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </Col>

          <Col lg={12}>
            <input
              type="text"
              name="job"
              placeholder="Job Title"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </Col>

          <Col lg={12}>
            <input
              type="text"
              name="job"
              placeholder="Job Title"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          </Col>
        </Row>
        <button type="submit" className="signup-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
