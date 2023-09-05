import React, { useEffect, useState } from "react";
import "../assests/ProductDetails.css";
import Image from "react-bootstrap/Image";
import CardSlider from "./CardSlider";
import { useParams } from "react-router-dom";
import CardsData from "../Data/CardsData";
function ProductDetails() {
  const { id } = useParams();
  let [selectData, setSelectData] = useState([]);
  selectData = CardsData.find((select) => select.id == id);
  console.log(selectData);
  useEffect(() => {
    window.scrollTo(0, 0);
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
                  <img id="featured" src={selectData.image} alt="" />
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
                      src={selectData.sliderImg[0]}
                    />
                    <img
                      className="thumbnail"
                      src={selectData.sliderImg[1]}
                    />
                    <img
                      className="thumbnail"
                      src={selectData.sliderImg[2]}
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
            <h4>{selectData.title}</h4>{" "}
            <p className="price">{selectData.price}</p>
            <h5 className="">Color</h5>
            <div className="container_box">
              <img src={selectData.colorImg[0]} alt="" className="color" />
              <img src={selectData.colorImg[1]} alt="" className="color" />
              {/* <img src={selectData.colorImg[2]} alt="" className="color" />
              <img src={selectData.colorImg[3]} alt="" className="color" /> */}

              {/* <img src={selectData.colorImg[1]} alt="" className="color" />    */}
            </div>
            <div className="container_box">
              <p className="color">{selectData.color[0]}</p>
              <p className="color">{selectData.color[1]}</p>
              <p className="color">{selectData.color[2]}</p>
              <p className="color">{selectData.color[3]}</p>
            </div>
            <h5 className="">Model</h5>
            <div className="container_box">
              <p className="model_space">{selectData.model[0]}</p>
              <p className="model_space">{selectData.model[1]}</p>
              <p className="model_space">{selectData.model[2]}</p>
              <p className="model_space">{selectData.model[3]}</p>
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
