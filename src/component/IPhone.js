import React, { useEffect ,useState} from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataCategory from "../Data/DataCategory";
export default function IPhone() {
  const [data, setData] = useState([]);
let [filteredProducts,setFilteredProducts]=useState([])
useEffect(() => {
  window.scrollTo(0, 0);
  axios.get('http://localhost:1010/product/get')
    .then((res) => {
      // Update the 'data' state with the fetched data
      setData(res.data);
    })
    .catch((err) => {
      console.log(`err${err}`);
    });
}, []); // The empty dependency array ensures that this effect runs only once when the component mounts


  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

        console.log(data)
        const handleClick = (productName) => {
          // Find products with titles containing the productName
          const filtered = data.filter((product) =>
            product.product_name.includes(productName)
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
            <div className="legend-container">
              <img
                src={require("../images/iphonesection.jpeg")}
                alt=""
                height={"670px"}    
                width={"100%"}                />
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
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone 14")}>
              iPhone 14
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("phone")}>
              iPhone 13
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("phone")}>
              iPhone 12
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone 11")}>
              iPhone 11
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone x")}>
              iPhone x
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
  <AllProduct filteredProducts={filteredProducts} data={data} />
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<IPhone />, rootElement);
