import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import "./index.css";

import TrafficChart from "./trafficChart";

const Dashboard = () => {
  return (
    <div>
      <Row className="mb-5">
        <Col className="mt-5" lg={12}>
          <Row>
            <Col md={6} xl={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <div>
                      <Row>
                        <Col
                          lg={6}
                          md={6}
                          style={{
                            fontWeight: "300",
                            fontSize: "45px",
                            color: "#252C58",
                          }}
                        >
                          45
                        </Col>

                        <Col lg={6} md={6}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#E6EAF5",
                                borderRadius: "50%",
                                width: "45px",
                                height: "45px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src="/Group (1).png"
                                style={{
                                  width: "23px",
                                  height: "21px",
                                  borderRadius: "50%",
                                }}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div
                      style={{
                        fontWeight: "300",
                        fontSize: "19px",
                        color: "#252C58",
                      }}
                    >
                      Your Total Reviews
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xl={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <div>
                      <Row>
                        <Col
                          lg={6}
                          md={6}
                          style={{
                            fontWeight: "300",
                            fontSize: "45px",
                            color: "#252C58",
                          }}
                        >
                          3
                        </Col>

                        <Col lg={6} md={6}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#E6EAF5",
                                borderRadius: "50%",
                                width: "45px",
                                height: "45px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src="/reviews.png"
                                style={{
                                  width: "23px",
                                  height: "21px",
                                  borderRadius: "50%",
                                }}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div
                      style={{
                        fontWeight: "300",
                        fontSize: "19px",
                        color: "#252C58",
                      }}
                    >
                      Your Business In Category
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xl={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    <div>
                      <Row>
                        <Col
                          lg={6}
                          md={6}
                          style={{
                            fontWeight: "300",
                            fontSize: "45px",
                            color: "#252C58",
                          }}
                        >
                          2
                        </Col>

                        <Col lg={6} md={6}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#E6EAF5",
                                borderRadius: "50%",
                                width: "45px",
                                height: "45px",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src="/reviews.png"
                                style={{
                                  width: "23px",
                                  height: "21px",
                                  borderRadius: "50%",
                                }}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div
                      style={{
                        fontWeight: "300",
                        fontSize: "19px",
                        color: "#252C58",
                      }}
                    >
                     Your Business in Sub Category
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="responsive-image-container">
        {/* <img
          src="/Business Dashboard.jpg"
          alt="Business Dashboard"
          className="responsive-image"
        /> */}

        <TrafficChart />
      </div>
    </div>
  );
};

export default Dashboard;
