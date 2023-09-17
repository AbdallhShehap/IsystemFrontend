import React, { useEffect,useState } from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
import DataCategory from "../Data/DataCategory";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";


export default function Watch() {

  const slider = React.useRef(null);
  const [data, setData] = useState([]);
let [filteredProducts,setFilteredProducts]=useState([])


useEffect(() => {
  window.scrollTo(0, 0);
  axios.get('ttps://jellyfish-app-6rwoy.ondigitalocean.app/productdetails/getproductdetailswatch')
    .then((res) => {
  const dataWithImages = res.data.map(data => ({
          ...data,
          image_main: `data:image/jpeg;base64,${data.image_base64}`
        }));
        console.log("Data with images:", dataWithImages);
              setData(dataWithImages);
              setFilteredProducts(dataWithImages); // Initialize filteredProducts with all products

    })
    .catch((err) => {
      console.log(`err${err}`);
    });
}, []);

console.log(data);

const handleClick = (productName) => {
  // Find products with titles containing the productName
  const filtered = data.filter((product) =>
    product.product_name.includes(productName)
  );
  setFilteredProducts(filtered);
};

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
   
  return (
    <>
            <div className="legend-container" >
              
              <img
                src={require("../images/Watch Section.jpg")}
                alt=""
                // height={"670px"}    
                width={"100%"}                
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
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
              watch,1
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
              watch,2
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
              watch,1
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
              watch,2
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
              watch
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
                watch
              </button>
            </div>
            <div>
              {" "}
              <button class="CARD_STYLE" tabIndex="-1"         onClick={(e) => handleClick(e.target.textContent)}
>
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
   
       
        <div class="container text-center">
        <div class="row">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 " key={product.p_id}>
                  <div class="card">
                    <img
                      src={`data:image/jpeg;base64,${product.image_base64}`} // Assuming it's base64 encoded
                      alt={product.product_name}
                      class="card-img-top"
                    />
                    <div class="d-flex justify-content-between ps-3 pt-3">
                      <p
                        class="lead mb-0 card_title category_title"
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        {product.product_name}{" "}
                      </p>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <p
                          className="small price"
                          style={{ color: "#C6C6C6", fontSize: "14px " }}
                        >
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
                          <p className={`mb-0 ${product.stock === 1 ? 'inStock' : 'outOfStock'}`}>
                            {product.stock === 1 ? "In stock" : "Out of stock"  }{" "}
                          </p>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            :  (
              <p>Product not valid</p>
            )}
        </div>
      </div>
   
    </>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Watch />, rootElement);
