import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const slick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true, 
    arrows: false,
    pauseOnHover: false,
    swipe: false,
  };

  const logos = [
    "public/images/post.png",
    "public/images/abs.png",
    "public/images/post2.png",
    "public/images/abs.png",
    "public/images/post.png",
    "public/images/post2.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/post.png",
    "public/images/abs.png",
    "public/images/post2.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
    "public/images/abs.png",
  ];

  return (
    <div className="logos-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default slick;
