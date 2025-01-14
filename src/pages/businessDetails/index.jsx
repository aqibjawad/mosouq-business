import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import { GET } from "../../apicontrollers/apiController";

import CarouselComponent from "../../components/carousal/index";
import FacebookStyleHeader from "../../components/businessHead";
import LocationSection from "./location";

const PropertyDetails = () => {
  const data = JSON.parse(localStorage.getItem("user"));

  // Access the "Country" field
  const dataId = data?._id;

  const [business, setBusinesses] = useState("");

  useEffect(() => {
    GET(`business-profile/profile/${dataId}`).then((result) => {
      setBusinesses(result);
    });
  }, [dataId]);

  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  return (
    <div className="property">
      <FacebookStyleHeader businessData={business} />

      <Container fluid className=" py-4 px-3 px-md-5">
        <Row className="g-5">
          <Col lg={8}>
            <div
              className=" py-5"
              style={{ borderBottom: "1px solid #F1F1F1" }}
            >
              <div className="d-flex pb-4 align-items-center justify-content-between">
                <div>
                  <h2>Our Services</h2>
                  <div className=" m-0">
                    {isHTML(business.description) ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: business?.description,
                        }}
                      />
                    ) : (
                      <p>{business?.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <CarouselComponent businessData={business} />

            {/* {approvedReviews && approvedReviews.length > 0 ? (
              <div className="pt-4">
                <Row>
                  {approvedReviews.map((review, index) => (
                    <Col lg={6} key={index}>
                      <div className="bg-white rounded-3 p-4 mb-3">
                        <div className="d-flex align-items-center pb-3 justify-content-between">
                          <div>
                            <h6 className="m-0">{review.user.name}</h6>
                          </div>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <IoStar
                                key={i}
                                size={20}
                                color={
                                  i < parseInt(review.rating)
                                    ? "#FFB800"
                                    : "#D3D3D3"
                                }
                              />
                            ))}
                            <span>{review.rating}</span>
                          </div>
                        </div>
                        <h6 className="m-0 mb-2">{review.title}</h6>
                        <p>{review.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <div className="pt-4">
                <p>No approved reviews available for this business yet.</p>
              </div>
            )} */}

            <div className="pt-5">
              {/* Location and Hours in a Row */}
              <div className="d-flex flex-wrap gap-4">
                {/* Location Section */}
                <div className="flex-grow-1 rounded-lg shadow-md p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                    Location
                  </h2>
                  <LocationSection businesses={business} />
                </div>

                {/* Business Hours Section */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyDetails;
