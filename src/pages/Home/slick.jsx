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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // sm
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    "public/images/post.png",
    "./images/hero.jpg",
    "./images/orascom.png",
    "./images/elswedy.png",
    "./images/arab.png",
    "./images/chemical.jpg",
    "./images/engineer.jpg",
    "public/images/oil.png",
    "public/images/post.png",
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
