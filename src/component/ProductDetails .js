import React, { useEffect, useState } from "react";
import "../assests/ProductDetails.css";
import Image from "react-bootstrap/Image";
import CardSlider from "./CardSlider";
import { Link, useParams } from "react-router-dom";
import CardsData from "../Data/CardsData";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();
  let [selectData, setSelectData] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState(""); // Initialize state for selected color
  const [selectedModel, setSelectedModel] = useState("");
  const [chosenProduct, setChosenProduct] = useState([]);
  const [details, setDetails] = useState([]);
  const [color, setColor] = useState([]);

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

  const handleColorClick = (color) => {
    setSelectedColor(color); // Update the selected color in the state
    setChosenProduct((prevChosenProduct) => [...prevChosenProduct, color]);
    // setContainerBoxClassName("selected"); // Apply the 'selected' class to the container
  };
  const handleModel = (model) => {
    setSelectedModel(model); // Update the selected color in the state
    setChosenProduct((prevChosenProduct) => [...prevChosenProduct, model]);
  };
  console.log(selectedColor);
  console.log(selectedModel);
  console.log(chosenProduct);
  useEffect(() => {
    console.log("Fetching data...");
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://plankton-app-dde9x.ondigitalocean.app/productdetails/getproductdetails/${id}`
        ); // Replace with your actual API endpoint
        if (response.data) {
          setDetails(response.data); // Assuming your API returns the product details in the response data
          console.log("details", details);
        } else {
          // Handle the case where the product with the given ID was not found
        }
      } catch (error) {
        // Handle any errors that occurred during the Axios request
      }
    };

    fetchData();
  }, [id]);
  console.log("deta", details);
  // selectData = dataWithImages.find((select) => select.id == id);
  useEffect(() => {
    console.log("Fetching data...");
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1010/color/getproductdetails`
        ); // Replace with your actual API endpoint
        if (response.data) {
          setColor(response.data); // Assuming your API returns the product details in the response data
          console.log("color", details);
        } else {
          // Handle the case where the product with the given ID was not found
        }
      } catch (error) {
        // Handle any errors that occurred during the Axios request
      }
    };

    fetchData();
  }, [id]);
  console.log("Color Name:", selectedColor.color_name);

  return (
    <div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-lg-7 mt-5 ">
            <div id="content-wrapper">
              <div class="column mb-5">
                <div className="d-flex justify-content-center">
                  <img
                    id="featured"
                    src={require("../images/iphonepurple.webp")}
                    alt=""
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
                    {/* <img
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
                    /> */}

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
            <p style={{ fontSize: "22pt", fontWeight: "bold" }}>
              {details.product_name}
            </p>
            <p className="price">{details.price}JD</p>
            <h5 className="colorAndModel_text">
              Color {selectedColor.color_name}
            </h5>
            {/* <div className="container_box">
              <img src={require('../images/blue.png')} alt="" className="color" />
              <img src={require('../images/blue.png')} alt="" className="color" />
              <img src={require('../images/blue.png')} alt="" className="color" />

            </div> */}
            <div className="container_box">
              {color.map((colorOption, index) => (
                <p
                  key={color.color_id}
                  className={`color ${
                    selectedColor === colorOption ? "selectedOption" : ""
                  }`}
                >
                  <img
                    src={require("../images/blue_1.png")}
                    alt=""
                    className="img_color"
                    onClick={() => handleColorClick(colorOption)}
                  ></img>

                  {/* {colorOption.color_name} */}
                </p>
              ))}
            </div>
            <h5 className="colorAndModel_text">Model</h5>
            <div className="container_box">
              <p className="model_space">64 GB</p>
              <p className="model_space">128 GB</p>
              <p className="model_space">256 GB</p>
              <p className="model_space">526 GB</p>
            </div>
            {selectedColor && (
              <Link to={"/cart"}>
                <button
                  className="btn btn-primary w-100 btn_details_cart mb-1 "
                  type="submit"
                  onClick={() => {
                    addItem({
                      id: details.p_id,
                      price: details.price, // Make sure selectData has a price property
                      product_name: details.product_name,
                      color_name: selectedColor.color_name,
                      model_name: selectedModel.model_name,
                    });
                  }}
                >
                  Add to Cart{" "}
                </button>
              </Link>
            )}
            <Link to={"/tradein"}>
              <button
                className="btn btn-primary w-100 btn_details_trade mb-1"
                type="submit"
              >
                Trade In
              </button>
            </Link>
            <Link to={"/installmentplan"}>
              <button
                className="btn btn-primary w-100 btn_details_trade mb-1"
                type="submit"
              >
                Installment
              </button>
            </Link>
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
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ProductDetails;
