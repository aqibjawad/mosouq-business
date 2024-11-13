import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaCopy,
} from "react-icons/fa";

import { Row, Col, Card } from "react-bootstrap";

import "./index.css"

const ShareAndPromote = () => {
  const [shareCount, setShareCount] = useState(1234);
  const [clickCount, setClickCount] = useState(5678);
  const businessLink = "https://yourbusiness.com/special-offer";

  const handleShare = (platform) => {
    // Yahan par actual sharing logic implement karni hogi
    setShareCount((prevCount) => prevCount + 1);
    alert(`Shared on ${platform}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(businessLink);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <div
        className="share-promote-container"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Share and Promote Your Business</h1>

        <div
          className="business-link"
          style={{
            margin: "20px 0",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
          }}
        >
          <p>{businessLink}</p>
          <button
            onClick={copyToClipboard}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px auto",
            }}
          >
            <FaCopy style={{ marginRight: "5px" }} /> Copy Link
          </button>
        </div>

        <div
          className="share-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          <button
            onClick={() => handleShare("Facebook")}
            style={{
              backgroundColor: "#3b5998",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <FaFacebook />
          </button>
          <button
            onClick={() => handleShare("Twitter")}
            style={{
              backgroundColor: "#1da1f2",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <FaTwitter />
          </button>
          <button
            onClick={() => handleShare("LinkedIn")}
            style={{
              backgroundColor: "#0077b5",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <FaLinkedin />
          </button>
          <button
            onClick={() => handleShare("WhatsApp")}
            style={{
              backgroundColor: "#25d366",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <FaWhatsapp />
          </button>
        </div>
      </div>

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
                      Your Total Shares
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
                      Your Total Click on your URL
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ShareAndPromote;
