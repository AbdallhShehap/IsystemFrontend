import React, { useEffect } from "react";
import "../assests/ProductDetails.css";
import Image from "react-bootstrap/Image";
import CardSlider from "./CardSlider";

function ProductDetails() {
  useEffect(() => {
    const thumbnails = document.getElementsByClassName("thumbnail");
    const activeImages = document.getElementsByClassName("active");
    const slider = document.getElementById("slider");

    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", function () {
        if (activeImages.length > 0) {
          activeImages[0].classList.remove("active");
        }

        this.classList.add("active");
        document.getElementById("featured").src = this.src;
      });
    }

    const buttonRight = document.getElementById("slideRight");
    const buttonLeft = document.getElementById("slideLeft");

    buttonLeft.addEventListener("click", function () {
      slider.scrollLeft -= 180;
    });

    buttonRight.addEventListener("click", function () {
      slider.scrollLeft += 180;
    });

    // Clean up event listeners when component unmounts
    return () => {
      for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].removeEventListener("mouseover", function () {
          if (activeImages.length > 0) {
            activeImages[0].classList.remove("active");
          }
        });
      }

      buttonLeft.removeEventListener("click", function () {
        slider.scrollLeft -= 180;
      });

      buttonRight.removeEventListener("click", function () {
        slider.scrollLeft += 180;
      });
    };
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-7 mt-5 ">
            {/* <div className="row">
              <div className="col">

              </div>
            </div> */}
            <div id="content-wrapper">
              <div class="column mb-5">
                <div className="d-flex justify-content-center">
                  <img
                    id="featured"
                    src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                  />
                </div>

                <div id="slide-wrapper">
                  <button
                    id="slideLeft"
                    className="btn btn-primary mb-3 arrow_slider "
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-arrow-left "></i>
                  </button>
                  <div id="slider">
                    <img
                      className="thumbnail active"
                      src={require("../images/iphoneBlack.webp")} 
                    />
                    <img
                      className="thumbnail"
                      src={require("../images/iphonegold.webp")}
                    />
                    <img
                      className="thumbnail"
                      src={require("../images/iphonesilver.webp")}
                    />

                    <img
                      className="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                  </div>
                  <button
                    id="slideRight"
                    className="btn btn-primary mb-3 arrow_slider "
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-arrow-right "></i>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 product_details">
            {" "}
            <h4>iPhone 14 Pro Max</h4> <p className="price">JD900</p>
            <h5 className="">Color</h5>
            <div className="container_box">
              <div className="color Deep_Purple"></div>
              <div className="color Silver"></div>
              <div className="color Space_Black"></div>
              <div className="color Gold"></div>
            </div>
            <div className="container_box">
              <p>Deep Purple</p>
              <p>Silver</p>
              <p>Space Black</p>
              <p>Gold</p>
            </div>
            <h5 className="">Model</h5>
            <div className="container_box">
              <p>128 GB</p>
              <p>256 GB</p>
              <p>512 GB</p>
              <p>1 TB</p>
            </div>
            <button
              className="btn btn-primary w-100 btn_details_cart mb-1 "
              type="submit"
            >
              Add to Cart{" "}
            </button>
            <button
              className="btn btn-primary w-100 btn_details_trade mb-1"
              type="submit"
            >
              Trade In
            </button>
            <button
              className="btn btn-primary w-100 btn_details_trade mb-1"
              type="submit"
            >
              Installment
            </button>
          </div>
        </div>
        </div>
<div className="">
        <div className="row">
          <div className="col">
            <Image src={require("../images/BigProductDetails.png")} fluid />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image src={require("../images/productDetailsWhite.png")} fluid />
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col">
            <CardSlider />
          </div>
        </div>
    </div>
  );
}

export default ProductDetails;
