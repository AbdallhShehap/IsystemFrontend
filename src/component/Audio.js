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
export default function Audio() {
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
            <div  >
              
              <img
                src={require("../images/ipod-699053_1920.jpg")}
                alt=""
                height={"670px"}    
                width={"100%"}                
              />
            </div>{" "}
            <div >
    
    <div className="row slider_box" >
      <div className="col-lg-1 ">
        {" "}
        <a
          className="btn btn-primary mb-3 arrow_slider "
          role="button"
          data-slide="prev"
          onClick={() => slider.current.slickPrev()}
        >
          <i className="fa fa-arrow-left "></i>
        </a>
      </div>
      <div className="col-lg-9">
        <div className="slider-container">
          <Slider {...settings} ref={slider}>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio,1
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio,3
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio,4
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio,2
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
              Audio
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1">
                iPad{" "}
              </button>
            </div>
          </Slider>
        </div>
        </div>

        <div className="col-lg-1 ">
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
  </div>
        <AllProduct />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Audio />, rootElement);
