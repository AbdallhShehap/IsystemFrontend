
import React, { useState, useEffect } from "react";
import "../assests/Cards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsData from "../Data/CardsData";
function TopSellingCard({title}) {
  const [slider, setSlider] = useState(null);
  const [cardsData, setCardsData] = useState(CardsData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false, // Disable the default arrows
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  // Initialize the slider reference once the component has mounted
  useEffect(() => {
    if (slider) {
      // You can access the slider methods here, e.g., slider.slickNext(), slider.slickPrev()
    }
  }, [slider]);

  return (
    <>
      <div class="container">
        <div class="card-slider">
          {/* <div class="col-lg-12 col-md-3"> */}
          <h2 className="title_card">{title}</h2>
          <div className="row">

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {cardsData.map((data) => (
                <div class="col-lg-12 col-md-12 m-1" >
                  <div class="card ">
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
                          class="btn btn-outline-primary w-100"
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
                </div>
              ))}
            </Slider>
          </div>
          {/* </div> */}
          <div className="col-md-12 col-sm-12 col_btn_prevNext" style={{marginTop:"10px"}}>
            <button
              onClick={goToPrevSlide}
              className="btn btn-primary mb-3  slider_home custom_btn_margin1"
            >
              {" "}
              <i className="fa fa-arrow-left" style={{ color: "#fff" }}></i>
            </button>
            <button
              onClick={goToNextSlide}
              className="btn btn-primary mb-3 slider_home custom_btn_margin2"
            >
              {" "}
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSellingCard;
