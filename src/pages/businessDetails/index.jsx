import React, { useState, useEffect } from "react";
import CarouselComponent from "../../components/carousel";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IoStar } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";

import { GET } from "../../apicontrollers/apiController";

const PropertyDetails = () => {
  const data = JSON.parse(localStorage.getItem("user"));

  // Access the "Country" field
  const dataId = data._id;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const [business, setBusinesses] = useState();

  useEffect(() => {
    GET(`business-profile/profile/${dataId}`).then((result) => {
      setBusinesses(result);
    });
  }, [dataId]);

  return (
    <div className="property">
      <CarouselComponent />

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
                  <p className=" m-0">
                    Pictures of business uploaded by consumers
                  </p>
                </div>
                <div></div>
              </div>
              <Row>
                <Col lg={4}>
                  <Image src="/photo1.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Image src="/photo2.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Image src="/photo3.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className=" py-5"
              style={{ borderBottom: "1px solid #F1F1F1" }}
            >
              <div className="d-flex pb-4 align-items-center justify-content-between">
                <div>
                  <h2>Recent Uploaded Photos</h2>
                  <p className=" m-0">
                    Pictures of business uploaded by consumers
                  </p>
                </div>
                <div>
                  <button className=" px-4    border py-3 rounded-3 bg-white d-flex  align-items-center">
                    <div className=" pe-2">
                      <img src="/w_camera.png" alt="" />
                    </div>
                    All photo
                  </button>
                </div>
              </div>
              <Row>
                <Col lg={4}>
                  <Image src="/photo1.png" className="w-100" alt="" />
                </Col>
                <Col lg={4}>
                  <Image src="/photo2.png" className="w-100" alt="" />
                </Col>
                <Col lg={4}>
                  <Image src="/photo3.png" className="w-100" alt="" />
                </Col>
              </Row>
            </div>

            <div
              className=" py-5"
              style={{ borderBottom: "1px solid #F1F1F1" }}
            >
              <div className="d-flex pb-4 align-items-center justify-content-between">
                <div>
                  <h2>Menu</h2>
                  <p className=" m-0">Updated Menu of Resturant</p>
                </div>
                <div>
                  <span className="">View full menu</span>
                </div>
              </div>
              <Row>
                <Col lg={4}>
                  <Image src="/photo1.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Image src="/photo2.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <Image src="/photo3.png" className="w-100" alt="" />
                  <div className=" pt-2">
                    <h5 className=" m-0 fs-5">Dish 1</h5>
                    <p className=" m-0">Pictures of business uploaded</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className=" bg-white rounded-3 p-3">
              <div className=" d-flex justify-content-between">
                <div>
                  <div className=" d-flex align-items-center">
                    <h4 className=" m-0">Reviews</h4>
                    <IoStar size={20} className=" mx-2" color="#FFB800" />
                    <h4 className="m-0">4.4</h4>
                  </div>
                  <p className=" m-0">21,100 total</p>
                </div>
              </div>

              <div className=" d-flex align-items-center   mt-3 justify-content-between">
                <div className=" d-flex">
                  <input
                    type="checkbox"
                    className=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h6 className=" ms-2"> 5 star</h6>
                </div>
                <div className=" w-75">
                  <div
                    style={{ backgroundColor: "#F2F2F5", height: "12px" }}
                    className=" w-100  rounded-3"
                  >
                    <div
                      style={{ backgroundColor: "#000", height: "12px" }}
                      className=" w-75  bg-black rounded-3"
                    ></div>
                  </div>
                </div>
                <h6>94%</h6>
              </div>

              <div className=" d-flex align-items-center   mt-3 justify-content-between">
                <div className=" d-flex">
                  <input
                    type="checkbox"
                    className=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h6 className=" ms-2"> 4 star</h6>
                </div>
                <div className=" w-75">
                  <div
                    style={{ backgroundColor: "#F2F2F5", height: "12px" }}
                    className=" w-100  rounded-3"
                  >
                    <div
                      style={{ backgroundColor: "#000", height: "12px" }}
                      className=" w-50  bg-black rounded-3"
                    ></div>
                  </div>
                </div>
                <h6>94%</h6>
              </div>
              <div className=" d-flex align-items-center   mt-3 justify-content-between">
                <div className=" d-flex">
                  <input
                    type="checkbox"
                    className=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h6 className=" ms-2"> 4 star</h6>
                </div>
                <div className=" w-75">
                  <div
                    style={{ backgroundColor: "#F2F2F5", height: "12px" }}
                    className=" w-100  rounded-3"
                  >
                    <div
                      style={{ backgroundColor: "#000", height: "12px" }}
                      className=" w-50  bg-black rounded-3"
                    ></div>
                  </div>
                </div>
                <h6>94%</h6>
              </div>
              <div className=" d-flex align-items-center   mt-3 justify-content-between">
                <div className=" d-flex">
                  <input
                    type="checkbox"
                    className=""
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h6 className=" ms-2"> 4 star</h6>
                </div>
                <div className=" w-75">
                  <div
                    style={{ backgroundColor: "#F2F2F5", height: "12px" }}
                    className=" w-100  rounded-3"
                  >
                    <div
                      style={{ backgroundColor: "#000", height: "12px" }}
                      className=" w-25  bg-black rounded-3"
                    ></div>
                  </div>
                </div>
                <h6>94%</h6>
              </div>
            </div>

            <div className=" pt-4">
              <Row>
                <Col lg={6}>
                  <div className=" bg-white rounded-3 p-4">
                    <div className=" d-flex align-items-center pb-3 justify-content-between">
                      <div>
                        <h6 className=" m-0">Mark & Karen</h6>
                      </div>
                      <div className=" rating">
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <span>0.8</span>
                      </div>
                    </div>
                    <h6>We liked the opportunity to talk with Melenie</h6>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat s
                    </p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className=" bg-white rounded-3 p-4">
                    <div className=" d-flex align-items-center pb-3 justify-content-between">
                      <div>
                        <h6 className=" m-0">Mark & Karen</h6>
                      </div>
                      <div className=" rating">
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <IoStar size={20} color="#FFB800" />
                        <span>0.8</span>
                      </div>
                    </div>
                    <h6>We liked the opportunity to talk with Melenie</h6>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat s
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className=" pt-4">
              <span className="">OPENING AND CLOSING HOURS</span>
              <h4>
                10:00 AM to <span style={{ color: "#F10000" }}>9:00 PM</span>{" "}
              </h4>
            </div>
          </Col>
          <Col lg={4}>

            <div className=" pt-5">
              <div className="d-flex pb-4 align-items-center justify-content-between">
                <div>
                  <h2>Location & Hours</h2>
                  <p className=" m-0">
                    Check out location and opening and closing Hours
                  </p>
                </div>
              </div>
              <img src="/maps.png" className=" w-100" alt="" />
            </div>

            <div className=" bg-white p-4 rounded-3 border">
              <div className=" d-flex justify-content-between">
                <h5 className=" ps-2 m-0">Company activity</h5>
                <p style={{ color: "#387DE2" }}>View all</p>
              </div>
              <div className=" pt-3">
                <ul>
                  <li className=" pb-2">
                    <div>
                      <img src="/calculator.png" />
                    </div>
                    <h6 className=" m-0">Claimed profile</h6>
                  </li>
                  <li className=" pb-2">
                    <div>
                      <img src="/send.png" />
                    </div>
                    <h6 className=" m-0">
                      Ask for review - postive or negative
                    </h6>
                  </li>
                  <li className=" pb-2">
                    <div>
                      <img src="/pay.png" />
                    </div>
                    <h6 className=" m-0">Pay for extra features</h6>
                  </li>
                  <li className=" pb-2">
                    <div>
                      <img src="/message.png" />
                    </div>
                    <h6 className=" m-0">Replied to 80% of negative reviews</h6>
                  </li>
                  <li className=" pb-2">
                    <div>
                      <img src="/watch.png" />
                    </div>
                    <h6 className=" m-0">
                      Replies to negative reviews in {`<`} 2 days{" "}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" bg-white p-4 rounded-3 border">
              <div className="">
                <h5 className=" m-0">Sailing Hotel</h5>

                <p>Information written by the company</p>

                <img src="/s_about.png" alt="" className=" w-100" />

                <p className=" pt-4">
                  Aardy.com brings world-class insurance to our customers, so
                  that they can travel with confidence. Give us 2 minutes, and
                  we will show you our marketplace of insurances available to
                  you. 
                </p>
              </div>
              <div className=" pt-3">
                <h5 className=" m-0">About Sailing Hotel</h5>

                <p>Information written by the company</p>
              </div>
              <div className=" pt-3">
                <p>
                  Aardy.com Travel Insurance Marketplace allows you to compare
                  and purchase the best Travel Insurance from all major
                  providers. Would you like to visit each travel protection
                  carrier directly? Of course not. So, enjoy an easy experience
                  and find the best travel insurance with Aardy.
                </p>
              </div>

              <div className=" pt-3">
                <h5 className=" m-0">Contact</h5>

                <ul className=" pt-4">
                  <li>
                    <div>
                      <img src="/@.png" />
                    </div>
                    <Link to={""}>Info@Aardy.com</Link>
                  </li>
                  <li>
                    <div>
                      <img src="/call.png" />
                    </div>
                    <Link to={""} className=" text-sm">
                      6504926298
                    </Link>
                  </li>
                  <li className="">
                    <div>
                      <img src="/location.png" />
                    </div>
                    <p>
                      1200 South Pine Island Road FL 33324 Plantation United
                      States
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyDetails;
