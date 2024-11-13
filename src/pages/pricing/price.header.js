import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

const PricingHeader = () => {
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowOptions(false); // Hide options when selecting a new plan
  };

  const handleGetStartedClick = () => {
    setShowOptions(true);
  };

  const handleBuyClick = () => {
    // Redirect to the page with the selected plan data
    navigate(`/plan/${selectedPlan}`);
  };

  const handleDemoClick = () => {
    // Handle demo logic here
    alert("Demo option clicked");
  };

  return (
    <div className="pricing-plans pt-5 mt-4">
      <Container fluid className=" px-3 px-md-5">
        <div style={{ textAlign: "center" }}>
          <strong className=" fs-1 text-blod">Pricing plans</strong>
          <p>The right plan for your business</p>
        </div>

        <Row className=" g-4 mt-2">
          <Col lg={4}>
            <div
              className={`plan ${selectedPlan === "Basic" ? "selected" : ""}`}
              onClick={() => handlePlanClick("Basic")}
            >
              <div className="header-container">
                <div>
                  <div className=" price_box_container">
                    <div className="price_box">
                      <div>
                        <img src="/pro.png" alt="" />
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: "500",
                          fontSize: "18px",
                          color: selectedPlan === "Basic" ? "#fff" : "#3C3C3C",
                        }}
                      >
                        For individuals
                      </div>
                      <h2
                        style={{
                          color: selectedPlan === "Basic" ? "#fff" : "#3C3C3C",
                        }}
                        className=" m-0 fs-3"
                      >
                        Basic
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className=""
                style={{ color: selectedPlan === "Basic" ? "#fff" : "#3C3C3C" }}
              >
                Lorem ipsum dolor sit amet dolosril sitdol cosme cetur
                adipiscing elit.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    color: "#0D233E",
                    color: selectedPlan === "Basic" ? "#fff" : "#0D233E",
                    fontWeight: "700",
                    fontSize: "54px",
                  }}
                >
                  $99
                </div>
                <p
                  style={{
                    marginLeft: "0.5rem",
                    color: selectedPlan === "Basic" ? "#D9DBE9" : "#0D233E",
                    fontWeight: "500",
                    fontSize: "20px",
                    marginTop: "2rem",
                  }}
                >
                  /monthly
                </p>
              </div>
              <ul>
                <li>All analytics features</li>
                <li>Up to 250,000 tracked visits</li>
                <li>Normal support</li>
                <li>Up to 3 team members</li>
              </ul>
              <div className="button-container">
                <button onClick={handleGetStartedClick}>Get started</button>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div
              className={`plan ${selectedPlan === "Pro" ? "selected" : ""}`}
              onClick={() => handlePlanClick("Pro")}
            >
              <div className=" price_box_container">
                <div className="price_box">
                  <div>
                    <img src="/pro.png" alt="" />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: selectedPlan === "Pro" ? "#fff" : "#3C3C3C",
                    }}
                  >
                    For startups
                  </div>
                  <h2  style={{
                          color: selectedPlan === "Pro" ? "#fff" : "#3C3C3C",
                        }} className=" m-0 fs-3">Pro</h2>
                </div>
              </div>
              <p  className=" pt-4" style={{ color: selectedPlan === "Pro" ? "#fff" : "#3C3C3C" }}>
                Lorem ipsum dolor sit amet dolosril sitdol cosme cetur
                adipiscing elit.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                 style={{
                  color: "#0D233E",
                  color: selectedPlan === "Pro" ? "#fff" : "#0D233E",
                  fontWeight: "700",
                  fontSize: "54px",
                }}
                >
                  $99
                </div>
                <p
                    style={{
                      marginLeft: "0.5rem",
                      color: selectedPlan === "Pro" ? "#D9DBE9" : "#0D233E",
                      fontWeight: "500",
                      fontSize: "20px",
                      marginTop: "2rem",
                    }}
                >
                  /monthly
                </p>
              </div>
              <ul>
                <li>All analytics features</li>
                <li>Up to 1,000,000 tracked visits</li>
                <li>Premium support</li>
                <li>Up to 10 team members</li>
              </ul>
              <div className="button-container">
                <button onClick={handleGetStartedClick}>Get started</button>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div
              className={`plan ${
                selectedPlan === "Enterprise" ? "selected" : ""
              }`}
              onClick={() => handlePlanClick("Enterprise")}
            >
              <div className=" price_box_container">
                <div className="price_box">
                  <div>
                    <img src="/inter.png" alt="" />
                  </div>
                </div>
                <div>
                  <div
                   style={{
                          fontWeight: "500",
                          fontSize: "18px",
                          color: selectedPlan === "Enterprise" ? "#fff" : "#3C3C3C",
                        }}
                  >
                    For big companies
                  </div>
                  <h2  style={{
                          color: selectedPlan === "Enterprise" ? "#fff" : "#3C3C3C",
                        }}
                        
                        className=" m-0 fs-3">Enterprise</h2>
                </div>
              </div>
              <p  className=" pt-4" style={{ color: selectedPlan === "Enterprise" ? "#fff" : "#3C3C3C" }}>
                Lorem ipsum dolor sit amet dolosril sitdol cosme cetur
                adipiscing elit.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                   style={{
                    color: "#0D233E",
                    color: selectedPlan === "Enterprise" ? "#fff" : "#0D233E",
                    fontWeight: "700",
                    fontSize: "54px",
                  }}
                >
                  $99
                </div>
                <p
                    style={{
                      marginLeft: "0.5rem",
                      color: selectedPlan === "Enterprise" ? "#D9DBE9" : "#0D233E",
                      fontWeight: "500",
                      fontSize: "20px",
                      marginTop: "2rem",
                    }}
                >
                  /monthly
                </p>
              </div>
              <ul>
                <li>All analytics features</li>
                <li>Up to 5,000,000 tracked visits</li>
                <li>Dedicated support</li>
                <li>Up to 50 team members</li>
              </ul>
              <div className="button-container">
                <button onClick={handleGetStartedClick}>Get started</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {showOptions && (
        <div className="options-container">
          <button onClick={handleDemoClick}>Demo</button>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      )}
    </div>
  );
};

export default PricingHeader;
