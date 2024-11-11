// src/components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/assets/image1.jpg" alt="Slide 1" className="d-block w-100" />
      </div>
      <div>
        <img src="/assets/image2.jpg" alt="Slide 2" className="d-block w-100" />
      </div>
      <div>
        <img src="/assets/image3.jpg" alt="Slide 3" className="d-block w-100" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
