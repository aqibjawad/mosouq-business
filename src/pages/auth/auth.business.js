import React, { useState } from "react";
import "./auth.business.css";
import { Row, Col } from "react-bootstrap";
import { POST } from "../../apicontrollers/apiController";
import { toast } from "react-toastify";

import "./signin.css";
import GoogleSignin from "../../components/google/googleSignin";

const BusinessSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "UAE",
    phone: "",
    website: "",
    title: "",
    role: "business",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await POST("business/add-business", formData);
      toast("Check your email to verify your Account");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const labelStyle = {
    color: "#666666",
    fontFamily: "Figtree",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19.2px",
    textAlign: "left",
  };

  return (
    <div
      id="signup"
      style={{
        overflow: "hidden",
        marginLeft: "4rem",
        marginRight: "4rem",
        marginTop: "9rem",
        marginBottom: "7rem",
      }}
    >
      <Row>
        <Col lg={6} md={6} sm={12}>
          <h1>Mosouq</h1>
          <p>For Business</p>

          <div>
            <h1>Build credibility with reviews</h1>
            <p>
              Collect trustworthy reviews on an open, transparent platform
              millions of consumers use.
            </p>
          </div>

          <div>
            <h1> Strengthen your reputation </h1>
            <p>
              94% of new users that automated review invites increased their
              TrustScore*
            </p>
          </div>

          <div>
            <h1> Grow performance </h1>
            <p>
              Trustpilot stars and content are proven to convert at higher rates
              than those of competitors
            </p>
          </div>
        </Col>
        <Col
          className="signup-right mx-auto"
          lg={6}
          md={6}
          sm={12}
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <h2 className="text-center mt-5">Sign Up for Mosoq.</h2>
          <p className="text-center mt-4">Connect with businesses</p>

          <button
            className="social-button google"
            style={{
              fontWeight: "400",
              fontSize: "12px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #CECECE",
            }}
          >
            {/* <img
              src="/Social media logo.png"
              style={{ width: "24px", height: "24px", marginRight: "0.5rem" }}
            />{" "}
            Continue with Google */}
            <GoogleSignin />
          </button>

          <button
            className="social-button apple"
            style={{
              fontWeight: "400",
              fontSize: "12px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #CECECE",
            }}
          >
            <img
              src="/apple.png"
              style={{ width: "24px", height: "24px", marginRight: "0.5rem" }}
            />{" "}
            Continue with Apple
          </button>

          <Row className="align-items-center">
            <Col lg={5}>
              <hr />
            </Col>

            <Col lg={2} className="text-center">
              OR
            </Col>

            <Col lg={5}>
              <hr />
            </Col>
          </Row>

          <form style={{ padding: "2rem" }} onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="name"
                  style={{ width: "100%" }}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3"
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <label htmlFor="company" style={labelStyle}>
                  Company Name
                </label>
                <input
                  id="company"
                  style={{ width: "100%" }}
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-3"
                />
              </Col>
            </Row>

            <div style={{ marginTop: "2rem" }}>
              <label htmlFor="email" style={labelStyle}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                style={{ width: "100%" }}
                value={formData.email}
                onChange={handleChange}
                className="mt-3"
              />
            </div>

            <Row>
              <Col lg={6} md={6} sm={12} className="mt-4">
                <label htmlFor="phone" style={labelStyle}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  style={{ width: "100%", marginTop: "2rem" }}
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-3"
                />
              </Col>
            </Row>

            <div style={{ marginTop: "2rem" }}>
              <label htmlFor="url" style={labelStyle}>
                Website URL
              </label>
              <input
                id="url"
                type="text"
                name="website"
                placeholder="Your Company Website"
                style={{ width: "100%", marginTop: "0.5rem" }}
                value={formData.website}
                onChange={handleChange}
                className="mt-3"
              />
            </div>

            <div style={{ marginTop: "2rem" }}>
              <label htmlFor="title" style={labelStyle}>
                Job Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Job Title"
                style={{ width: "100%", marginTop: "0.5rem" }}
                value={formData.title}
                onChange={handleChange}
                className="mt-3"
              />
            </div>

            <div className="terms" style={{ marginTop: "2rem" }}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-3"
              />
              <label htmlFor="terms" style={labelStyle}>
                By creating an account, I agree to our{" "}
                <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="signin-button"
            >
              {isLoading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              {isLoading ? "Creating Account..." : "Create Free Account"}
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessSignUp;
