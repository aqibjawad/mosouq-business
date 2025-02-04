import React from "react";
import { IoStar } from "react-icons/io5";
import { Row, Col } from "react-bootstrap";

const ReviewsComponent = () => {
  const averageRating = 4.2; // Static average rating
  const totalReviews = 15; // Static total number of reviews
  const starPercentages = {
    5: 60, // Static percentages
    4: 20,
    3: 10,
    2: 5,
    1: 5,
  };
  const approvedReviews = [
    {
      user: { name: "John Doe" },
      rating: 5,
      title: "Great service!",
      description: "Really loved the quality and attention to detail.",
    },
    {
      user: { name: "Jane Smith" },
      rating: 4,
      title: "Good, but can improve",
      description: "Overall a good experience, but some delays in service.",
    },
    {
      user: { name: "Jane Smith" },
      rating: 3,
      title: "Good, but can improve",
      description: "Overall a good experience, but some delays in service.",
    },
  ]; // Static reviews data

  const handleShow = () => {
    alert("Write Review button clicked"); // Replace with UI interaction
  };

  return (
    <div className="bg-white rounded-3 p-3" style={{marginTop:"10rem"}}>
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex align-items-center">
            <h4 className="m-0">Reviews</h4>
            <IoStar size={20} className="mx-2" color="#FFB800" />
            <h4 className="m-0"> {averageRating} </h4>
          </div>
          <p className="m-0"> {totalReviews} total</p>
        </div>
        <div>
          <button onClick={handleShow} className="btn bg-black text-white">
            Write Review
          </button>
        </div>
      </div>

      {[5, 4, 3, 2, 1].map((star) => (
        <div
          key={star}
          className="d-flex align-items-center mt-3 justify-content-between"
        >
          <div className="d-flex">
            <input
              type="checkbox"
              className=""
              style={{ width: "20px", height: "20px" }}
            />
            <h6 className="ms-2">{star} star</h6>
          </div>
          <div className="w-75">
            <div
              style={{ backgroundColor: "#F2F2F5", height: "12px" }}
              className="w-100 rounded-3"
            >
              <div
                style={{
                  backgroundColor: "#000",
                  height: "12px",
                  width: `${starPercentages[star]}%`,
                }}
                className="bg-black rounded-3"
              ></div>
            </div>
          </div>
          <h6>{starPercentages[star]}%</h6>
        </div>
      ))}

      {approvedReviews && approvedReviews.length > 0 ? (
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
                            i < parseInt(review.rating) ? "#FFB800" : "#D3D3D3"
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
      )}
    </div>
  );
};

export default ReviewsComponent;
