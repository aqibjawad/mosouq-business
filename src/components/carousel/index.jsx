import { useState } from "react";
import {
  Carousel as BootstrapCarousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import { IoStar } from "react-icons/io5";
import "./carousel.css";
function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel activeIndex={index} onSelect={handleSelect}>
      <BootstrapCarousel.Item>
        <Image src={"/slide1.png"} alt="" className=" w-100" />
        <BootstrapCarousel.Caption>
          <Container fluid className="">
            <Row className=" carousel_card mx-auto">
              <Col lg={11} className=" mx-auto">
                <h1 className="m-0">Sailing Hotel</h1>
                <h6 className="">Where stay is Unique</h6>
                <div className=" pt-2 pb-sm-5 pb-4 rating">
                  <span>0.8</span>
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                </div>
                <div className=" d-sm-flex pt-sm-4 pt-0 justify-content-between">
                  <div>
                    <h5>American, Breakfast & brunch, Seafood</h5>
                    <h5>
                      {" "}
                      <span className="" style={{ color: "#04C585" }}>
                        Open
                      </span>{" "}
                      6:30 PM - 9:00 AM
                    </h5>
                  </div>
                  <div className="   btn_container">
                    <button className=" px-3 review_btn">
                      {" "}
                      <IoStar size={25} color="white" /> All Review
                    </button>
                    <button className=" review_btn px-3">
                      {" "}
                      <div>
                        <img src="/camera.png" />
                      </div>{" "}
                      All photo
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <Image src={"/slide1.png"} className=" w-100" alt="" />
        <BootstrapCarousel.Caption>
          <Container fluid className="">
            <Row className=" carousel_card mx-auto">
              <Col lg={11} className=" mx-auto">
                <h1 className="m-0">Sailing Hotel</h1>
                <h6 className="">Where stay is Unique</h6>
                <div className=" pt-2 pb-sm-5 pb-4 rating">
                  <span>0.8</span>
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                </div>
                <div className=" d-sm-flex pt-sm-4 pt-0 justify-content-between">
                  <div>
                    <h5>American, Breakfast & brunch, Seafood</h5>
                    <h5>
                      {" "}
                      <span className="" style={{ color: "#04C585" }}>
                        Open
                      </span>{" "}
                      6:30 PM - 9:00 AM
                    </h5>
                  </div>
                  <div className="   btn_container">
                    <button className=" px-3 review_btn">
                      {" "}
                      <IoStar size={25} color="white" /> All Review
                    </button>
                    <button className=" review_btn px-3">
                      {" "}
                      <div>
                        <img src="/camera.png" />
                      </div>{" "}
                      All photo
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <Image src={"/slide1.png"} className=" w-100" alt="" />
        <BootstrapCarousel.Caption>
          <Container fluid className="">
            <Row className=" carousel_card mx-auto">
              <Col lg={11} className=" mx-auto">
                <h1 className="m-0">Sailing Hotel</h1>
                <h6 className="">Where stay is Unique</h6>
                <div className=" pt-2 pb-sm-5 pb-4 rating">
                  <span>0.8</span>
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                  <IoStar size={20} color="#FFB800" />
                </div>
                <div className=" d-sm-flex pt-sm-4 pt-0 justify-content-between">
                  <div>
                    <h5>American, Breakfast & brunch, Seafood</h5>
                    <h5>
                      {" "}
                      <span className="" style={{ color: "#04C585" }}>
                        Open
                      </span>{" "}
                      6:30 PM - 9:00 AM
                    </h5>
                  </div>
                  <div className="   btn_container">
                    <button className=" px-3 review_btn">
                      {" "}
                      <IoStar size={25} color="white" /> All Review
                    </button>
                    <button className=" review_btn px-3">
                      {" "}
                      <div>
                        <img src="/camera.png" />
                      </div>{" "}
                      All photo
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
}

export default CarouselComponent;
