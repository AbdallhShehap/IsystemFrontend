import React, { useState } from "react";
import DropDownData from "../Data/DropDownData.js";
import CardsData from "../Data/CardsData.js";
import CompareData from "../Data/CompareData.js";
import "../assests/Compare.css";
function Compare() {
  const [dropDown, setDropDown] = useState(DropDownData);
  const [dataCategory, setDataCategory] = useState(CardsData.slice(0, 4));
  const [compareData, setCompareData] = useState(CompareData);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col compare_title">
            <h3 className="compare_title">Compare iPhone models</h3>
          </div>
        </div>
        <div className="row ">
          {DropDownData.map((data) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
              key={data.id}
            >
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    color: "#000",
                  }}
                >
                  {data.title}{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <p className="dropdown-item">{data.phone1}</p>
                  <p className="dropdown-item">{data.phone2}</p>
                  <p className="dropdown-item">{data.phone3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {dataCategory.map((data) => (
            <>
              <div
                className="col-lg-3 col-md-6 col-sm-12 "
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                key={data.id}
              >
                <div className="d-flex flex-column">
                  <div class="card card_info ms-2">
                    <img
                      src={require("../images/watch.png")}
                      class="card-img-top"
                      alt="Laptop"
                    />
                    <div class="d-flex justify-content-between p-3">
                      <p class="lead mb-0 card_title">{data.title}</p>
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <p class="small text-danger">{data.price}</p>
                        <p class="small oldPrice">{data.oldPrice}</p>
                      </div>
                      <div class="d-flex justify-content-between mb-2">
                        <p class="mb-0 inStock">{data.inStock} </p>
                      </div>

                      <div class="d-flex justify-content-between mb-3">
                        <button
                          class="btn btn-outline-primary w-100 more_info_btn"
                          type="button"
                        >
                          More Info
                        </button>
                        <button type="button" class="btn btn-danger ms-2">
                          {" "}
                          <img
                            src={require("../images/cart.png")}
                            class="card-img-top"
                            alt="Laptop"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/verticalLine.png")}
                      alt=""
                      height={"180px"}
                      width={"25px"}
                    />
                  </div>
                  <div className="inforamtion_device d-grid justify-content-center">
                    <p
                      className="mb-0 mt-3"
                      style={{ fontSize: "40px", textAlign: "center" }}
                    >
                      6.7
                    </p>
                    <p
                      className="mb-0"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    >
                      Super Retina XDR display ProMotion technology Always-On
                      display
                    </p>
                    <div className=" d-flex justify-content-center">

                    <img
                      src={require("../images/battery.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                    </div>
                    <p
                      className="mb-0 mt-3"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    >
                     Up to 29 hours of video 
playback
                    </p>
                    <div className=" d-flex justify-content-center">

<img
  src={require("../images/camera.png")}
  alt=""
  height={"30px"}
  width={"40px"}
  className="mt-5"
/>
</div>
<p
                      className="mb-5 mt-3"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    >
Pro camera system
48MP Main | Ultra Wide
Telephoto
Photonic Engine for
 incredible detail and color
Autofocus on
 TrueDepth front camera
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* <div class="circle"></div>
        <div className="row">
          {compareData.map((compare) => (
            <>
              <div
                className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
                key={compare.id}
              >
             
                    <img
                      src={require("../images/verticalLine.png")}
                      alt=""
                      height={"180px"}
                    />
             
              </div>
            </>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Compare;
