import React,{useEffect,useState} from 'react'
import Image from "react-bootstrap/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsData from "../Data/CardsData.js";
import BlogDetailsData from '../Data/BlogDetailsData.js';
function Blog() {
  const [slider, setSlider] = useState(null);
  // const [cardsData, setCardsData] = useState(CardsData);
  const [blogData,setBlogData]=useState(BlogDetailsData)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll:3, // Scroll 3 cards at a time
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
                <Image  src={require('../images/BigBlog.png')} height={"50%"} width={"100%"}/>
    <div className='container'>
<div className='row'>
  <h3 className='mt-5 mb-4'>Our Blog</h3>
<form>
        <div class="input-group">
          <input
            type="text"
            className="form-control search_blog"
            placeholder="Search Blog"
            aria-describedby="basic-addon1"
          />
        </div>
        
      </form>
  
   </div>
   <div className='row'>
 
        <div class="card-slider">
          <div className="row">

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {blogData.map((data) => (
                <div key={data.id}>
                <div class="col-lg-12 col-md-12 m-1" >
                  <div className='row'>
                  <div
              className="card mx-auto"
              style={{ width: "25rem", border: "none", textAlign: "left" }}
              key={data.id}
            >
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <p className="card-text">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#27579A",
                    border: "none",
                    marginTop: "2%",
                  }}
                >
                  Read More{" "}
                </a>
              </div>
            </div>
                  </div>
              
                </div>
                <div class="col-lg-12 col-md-12 m-1" >
                  <div className='row'>
                  <div
              className="card mx-auto"
              style={{ width: "25rem", border: "none", textAlign: "left" }}
              key={data.id}
            >
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <p className="card-text">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#27579A",
                    border: "none",
                    marginTop: "2%",
                  }}
                >
                  Read More{" "}
                </a>
              </div>
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
   </div>
    </>
  )
}

export default Blog