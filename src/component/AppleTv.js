import React, { useEffect } from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
// import ReactCardCarousel from "react-card-carousel";

// import "swiper/swiper-bundle.css";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AppleTv() {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <div className="legend-container" >
              
              <img
                src={require("../images/applications-7025904_1920.jpg")}
                alt=""
                className="background_slider"
              
              />
            </div>{" "}
          </div>
        </div>
        <div className="row slider_box" >
          <div className="col-lg-1">
            {" "}
            <a
              className="btn btn-primary mb-3 arrow_slider"
              role="button"
              data-slide="prev"
              onClick={() => slider.current.slickPrev()}
            >
              <i className="fa fa-arrow-left "></i>
            </a>
          </div>
          <div className="col  d-flex justify-content-center">
            <div className="slider-container">
              <Slider {...settings} ref={slider}>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 1
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 2
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 3
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 4 
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 7
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 5
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  AppleTv 6
                  </button>
                </div>
              </Slider>
            </div>
            </div>

            <div className="col">
              {" "}
              <a
                className="btn btn-primary mb-3 arrow_slider"
                role="button"
                data-slide="next"
                onClick={() => slider.current.slickNext()}
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
        </div>
        <AllProduct />
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<AppleTv />, rootElement);
