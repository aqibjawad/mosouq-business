import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogsCards = () => {
  return (
    <div className="main-blog mt-5 pt-5">
      <Container fluid className=" px-3 pt-5 px-md-5">
        <Row className=" g-5 align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className=" d-flex  pb-2 gap-3">
              <p
                style={{ backgroundColor: "#DEE2E7" }}
                className=" m-0 py-1 px-3 rounded-2"
              >
                Health
              </p>
              <p
                style={{ backgroundColor: "#DEE2E7" }}
                className=" m-0 py-1 px-3 rounded-2"
              >
                Care
              </p>
            </div>
            <div className="blog-head">
              The Best spa saloon for your relasxtions?
            </div>

            <div className="blog-descrp py-3">
              Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet consectetur em
              adipiscing elit,
            </div>

            <button className=" py-3  px-5 rounded-3 bg-white text-black border  ">
              Read More
            </button>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <img className="blog-head-image w-100" src="/blog-head.png"  />
          </Col>
        </Row>
        <div className="blogs-cont py-5">
          <Row className=" mb-4  justify-content-between mt-5">
            <Col sm="6" className="">
              <h2>Latest Blogs</h2>
              <p>Busines that people vists the most</p>
            </Col>

            <Col sm="auto">
              <Link
                to="/business"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  fontSize: "14px",
                  color: "white",
                  backgroundColor: "#404EED",
                  borderRadius: "62px",
                  textDecoration: "none",
                  textAlign: "center",
                  width: "135px",
                  height: "49px",
                  border: "1px solid #0000004D",
                }}
              >
                View All
              </Link>
            </Col>
          </Row>

          <div>
            <Row className="blogs-cont-cards">
              {[1, 2, 3, 4, 5].map((businesses, index) => (
                <Col key={index} md="4" className="mb-4">
                  <Card
                    className=" m-0"
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        textAlign: "right",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/Linkblog.png"
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          padding: "10px",
                        }}
                        alt="Banner"
                      />
                    </div>

                    <Card.Body>
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className="  d-flex gap-3">
                          <div
                            style={{ backgroundColor: "#DEE2E7" }}
                            className=" text-center  px-3 rounded-1 py-1"
                          >
                            Health
                          </div>
                          <div
                            style={{ backgroundColor: "#DEE2E7" }}
                            className=" px-3 rounded-1 py-1"
                          >
                            Care
                          </div>
                        </div>

                        <div
                          className=" d-flex gap-1 align-items-center"
                          style={{
                            color: "#9C9C9C",
                            fontWeight: "400",
                            fontSize: "13px",
                          }}
                        >
                          <div>
                            <img src={"/date.png"} />
                          </div>
                          October 4, 2023
                        </div>
                      </div>

                      <Card.Title>
                        <div
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            color: "#0D233E",
                            marginTop: "1rem",
                          }}
                        >
                          The Best spa saloon for your relasxtions?
                        </div>
                      </Card.Title>
                      <Card.Text>
                        <div
                          className=" pt-2"
                          style={{
                            fontWeight: "400",
                            fontSize: "15px",
                            color: "#666666",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur em adipiscing
                          elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                          amet consectetur em adipiscing elit,
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsCards;
