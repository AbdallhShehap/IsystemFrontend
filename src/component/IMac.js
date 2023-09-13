import React, { useEffect,useState } from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
import DataCategory from "../Data/DataCategory";
import CardMacc from "../Data/CardMacc";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function IMac() {
  const slider = React.useRef(null);
  const [data, setData] = useState(CardMacc);
  let [filteredProducts,setFilteredProducts]=useState(data)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  useEffect(()=>{
    window.scrollTo(0,0)
        },[])
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
    <div>
            <div  >
              
              <img
                src={require("../images/Mac Section.jpg")}
                alt=""
// height={"740px"}    
width={"100%"}          />
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
                  <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
                  iMac20,1
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone 14")}>
                  iMac20,2
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
                  iMac19,1
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
                  iMac19,2
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabIndex="-1"onClick={() => handleClick("iPhone 14")}>
                    iMac
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabIndex="-1" onClick={() => handleClick("iPhone 14")}>
                    watch
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
        {/* <AllProduct filteredProducts={filteredProducts} /> */}
            <div>
      <div class="container text-center">
        <div class="row">
        {filteredProducts.length > 0 ?(filteredProducts.map((product) => (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product.id}>
              <div class="card">
                <img src={product.image} class="card-img-top"  />
                <div class="d-flex justify-content-between ps-3 pt-3">
                  <p
                    class="lead mb-0 card_title category_title"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {product.title}
                  </p>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
                      Starting at{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "17px",
                        }}
                      >
                        {product.price}
                      </span>
                    </p>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{product.stock === 1 ? "In stock" : "Out of stock"} </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))):
          (data.map((product) => (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product._id}>
              <div class="card">
                <img src={product.image} class="card-img-top" alt="product" />
                <div class="d-flex justify-content-between ps-3 pt-3">
                  <p
                    class="lead mb-0 card_title category_title"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {product.title}{" "}
                  </p>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
                      Starting at{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "17px",
                        }}
                      >
                        {product.price}
                      </span>
                    </p>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{product.stock === 1 ? "In stock" : "Out of stock"} </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          )))
        
             }
             </div>
</div>
</div>
</div>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<IMac />, rootElement);
