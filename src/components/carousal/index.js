import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { IoStar } from "react-icons/io5";
import "./carousel.css";

function CarouselComponent({ businessData }) {

  // Early return if no businessData
  if (!businessData) {
    console.log("No businessData provided");
    return <div>Loading...</div>;
  }

  // Early return if no images
  if (!businessData.images || !Array.isArray(businessData.images)) {
    console.log("No images array found in businessData");
    return (
      <div className="no-images">
        <p>No images available</p>
        <div className="carousel-caption">
          <div className="rating">
            <IoStar color="gold" />
            <span>{businessData?.rating || "No rating"}</span>
          </div>
          <h3>{businessData?.name}</h3>
          <p>{businessData?.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="business-carousel">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {businessData.images.map((image, idx) => {
          console.log("Rendering slide for image:", image);
          return (
            <SwiperSlide key={idx}>
              <div className="carousel-item">
                <img
                  src={image}
                  alt={`Business image ${idx + 1}`}
                  className="d-block w-100"
                  onError={(e) => {
                    console.error("Image failed to load:", image);
                    e.target.src = "fallback-image-url.jpg"; // Add a fallback image URL
                  }}
                />
                <div className="carousel-caption">
                  <div className="rating">
                    <IoStar color="gold" />
                    <span>{businessData.rating || "No rating"}</span>
                  </div>
                  <h3>{businessData.name}</h3>
                  <p>{businessData.description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CarouselComponent;
