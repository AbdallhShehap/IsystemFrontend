import React, { useEffect } from "react";
import cart from "../images/cart.png";
import airpods from "../images/airpods.png";
import "../assests/Cards.css";
function CardSlider({ title }) {
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators2");

    carousel.addEventListener("slide.bs.carousel", function (event) {
      const indicators = document.querySelectorAll(
        "#carouselExampleIndicators2 .carousel-indicators li"
      );

      // Remove the 'active' class from all indicators
      indicators.forEach((indicator) => {
        indicator.classList.remove("active");
      });

      // Add the 'active' class to the new indicator
      indicators[event.to].classList.add("active");
    });
  }, []);

  return (
    <div>
      {/* <section className="pt-5 pb-5"> */}
      <div className="container">
        <div className="row">
          <div>
            <h3 className="mb-3 special_offer">Special Offers</h3>
          </div>

          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img src={airpods} class="card-img-top" alt="Laptop" />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/iPad.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                      <div class="card">
                        <img
                          src={require("../images/watch.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                        <div class="d-flex justify-content-between p-3">
                          <p class="lead mb-0 card_title">
                            AirPods Pro with MagSafe Charging Case (2021)
                          </p>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <p class="small text-danger">JD275</p>
                            <p class="small oldPrice">JD400</p>
                          </div>
                          <div class="d-flex justify-content-between mb-2">
                            <p class="mb-0 inStock">in stock </p>
                          </div>
                          <div class="d-flex justify-content-between mb-3">
                            <button
                              class="btn btn-outline-primary w-100"
                              type="button"
                            >
                              More Info
                            </button>
                            <button type="button" class="btn btn-danger ms-2">
                              {" "}
                              <img
                                src={cart}
                                class="card-img-top"
                                alt="Laptop"
                              />
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-right d-flex justify-content-center mt-4 ">
            <a
              className="btn btn-primary mb-3 arrow_slider"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left "></i>
            </a>
            <div>
              <ol className="carousel-indicators ">
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="0"
                  className="active "
                  id="dot"
                ></li>
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="1"
                  id="dot"
                ></li>
                <li
                  data-target="#carouselExampleIndicators2"
                  data-slide-to="2"
                  id="dot"
                ></li>
              </ol>
            </div>
            <a
              className="btn btn-primary mb-3 arrow_slider"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}

export default CardSlider;
