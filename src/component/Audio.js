import React, { useEffect,useState } from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
import DataCategory from "../Data/DataCategory";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Audio() {
  const slider = React.useRef(null);
  const [data, setData] = useState(DataCategory);
  let [filteredProducts,setFilteredProducts]=useState(data)
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handleClick = (productName) => {
    // Find products with titles containing the productName
    const filtered = data.filter((product) =>
      product.title.includes(productName)
    );
  setFilteredProducts(filtered)
    // Check if any products were found
    if (filteredProducts.length > 0) {
      console.log('Selected Products:', filteredProducts);
      // You can do something with the selected product data here
    } else {
      console.log('Products not found');
    }
  };
  return (
    <>
            <div   className="legend-container">
              
              <img
                src={require("../images/Audio Section.jpg")}
                alt=""
                height={"670px"}    
                style={{width:"100%"}}               
              />
            </div>{" "}
            <div >
    
    <div className="row slider_box" >
      <div className="col-lg-1 ">
        {" "}
        <a
          className="btn btn-primary mb-3 arrow_slider hide_btn"
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
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("Audio,1")}>
              Audio,1
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone 14")}>
              Audio,3
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")} >
              Audio,4
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
              Audio,2
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
              Audio
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
              Audio
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
                iPad{" "}
              </button>
            </div>
          </Slider>
        </div>
        </div>

        <div className="col-lg-1 ">
          {" "}
          <a
            className="btn btn-primary mb-3 arrow_slider hide_btn"
            role="button"
            data-slide="next"
            onClick={() => slider.current.slickNext()}
          >
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
    </div>
  </div>
        <AllProduct filteredProducts={filteredProducts} />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Audio />, rootElement);
