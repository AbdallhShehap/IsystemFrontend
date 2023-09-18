import React, { useState, useEffect } from "react";
import "../assests/Cards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsData from "../Data/CardsData";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


function TopSellingCard({title}) {
  const [slider, setSlider] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false, // Disable the default arrows
    responsive: [
      {
        breakpoint: 900,
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
  
    useEffect(() => {
      if (slider) {
        // You can access the slider methods here, e.g., slider.slickNext(), slider.slickPrev()
     
      }
    console.log("Fetching data...");
    window.scrollTo(0, 0);
    axios.get('https://plankton-app-dde9x.ondigitalocean.app/productdetails/getproductdetails')
    .then((res) => {
        const dataWithImages = res.data.map(data => ({
          ...data,
          image_main: `data:image/jpeg;base64,${data.image_base64}`
        }));
        console.log("Data nnnnnnnns:", dataWithImages);
        setCardsData(dataWithImages);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, [slider]);


  
  return (
    <>
      <div className="container">
        <div className="card-slider">
          <h2 className="title_card">{title}</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cardsData.map((data) => (
 <div className="col-lg-12 col-md-12 col-sm-12">
 <div className="card"  key={data.p_id}>
                  <img
                    src={`data:image/jpeg;base64,${data.image_base64}`}
                    alt={data.product_name}
                    className="card-img-top"
                  />
                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0 card_title">{data.product_name}</p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-danger">{data.price}</p>
                      <p className="small oldPrice">{data.old_price}</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">
                        {data.stock === 1 ? "In stock" : "Out of stock"}{" "}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <Link
                        to={`productdetails/${data.p_id}`}
                        className="w-100"
                      >
                        <button
                          className="btn btn-outline-primary w-100 more_info_btn"
                          type="button"
                        >
                          More Info
                        </button>
                      </Link>
                      <button type="button" className="btn btn-danger ms-2">
                        <Link to={"cart"}>
                          {" "}
                          <img
                            src={require("../images/cart.png")}
                            className="card-img-top"
                            alt="Laptop"
                          />
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div
            className="col-md-12 col-sm-12 col_btn_prevNext"
            style={{ marginTop: "10px" }}
          >
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


