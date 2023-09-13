import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogDetailsData from "../Data/BlogDetailsData.js";
import { Link } from "react-router-dom";
function Blog() {
  const [slider, setSlider] = useState(null);
  // const [cardsData, setCardsData] = useState(CardsData);
  const [blogData, setBlogData] = useState(BlogDetailsData);
  const [searchFlag,setSearchFlag]=useState(false)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 3, // Scroll 3 cards at a time
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
    window.scrollTo(0,0)
    if (slider) {
    }
  }, [slider]);

  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchFlag(true)
    setSearchField(e.target.value);
  };
  const filteredBlog = blogData.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchField.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  return (
    <>
    <div className="blog_container">

      <Image
        src={require("../images/blogBackground.png")}
        width={"100%"}
      />
    </div>
      <div className="container">
        <div className="row">
          <h3 className="mt-5 mb-4 ms-5">Our Blog</h3>
          <form>
            <div className="input-group  ms-4">
              <input
                type="text"
                className="form-control search_blog  "
                placeholder="Search Blog"
                aria-describedby="basic-addon1"
                value={searchField}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="row">
          <div class="card-slider">
            <div className="row">
              
            {/* <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {filteredPersons.map((data) => (
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
                <Link to={`blogdetails/${data.id}`}
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#27579A",
                    border: "none",
                    marginTop: "2%",
                  }}
                >
                  Read More{" "}
                </Link>
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
              <img src={data.image} className="card-img-top" alt={data.title}  />
              <div className="card-body">
                <p className="card-text">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <Link to={`blogdetails/${data.id}`}
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#27579A",
                    border: "none",
                    marginTop: "2%",
                  }}
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
                  </div>
              
                </div>
                </div>
                
          ))}
            </Slider> */}
            {searchFlag ?  <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {filteredBlog.map((data) => (
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
                <small className="card-title blog_title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <Link to={`blogdetails/${data.id}`}
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#27579A",
                    border: "none",
                    marginTop: "2%",
                  }}
                >
                  Read More{" "}
                </Link>
              </div>
            </div>
                  </div>
              
                </div>
                </div>
                
                ))}
                  </Slider> 
                : 
                  <Slider {...settings} ref={(slider) => setSlider(slider)}>
                  {blogData
                    .reduce((rows, item, index) => {
                      if (index % 2 === 0) rows.push([]);
                      rows[rows.length - 1].push(item);
                      return rows;
                    }, [])
                    .map((row, rowIndex) => (
                      <div className="row" key={rowIndex}>
                        {row.map((data) => (
                          <div key={data.id} className="col-lg-12 col-md-12 m-1">
                                             <div className='row'>
  
                            <div
                              className="card mx-auto"
                              style={{
                                width: "25rem",
                                border: "none",
                                textAlign: "left",
                                height:"25rem"
                              }}
                              key={data.id}
                            >
                              <img
                                src={data.image}
                                className="card-img-top blog_img"
                                alt={data.title}
                              />
                              <div className="card-body">
                                <p className="card-text blog_title">{data.title}</p>
                                <small
                                  className="card-title"
                                  style={{ color: "#BEBEBE" }}
                                >
                                  {data.date}
                                </small>
                                <br></br>
                                <Link
                                  to={`blogdetails/${data.id}`}
                                  href="#"
                                  className="btn btn-primary"
                                  style={{
                                    backgroundColor: "#27579A",
                                    border: "none",
                                    marginTop: "2%",
                                  }}
                                >
                                  Read More{" "}
                                </Link>
                              </div>
                            </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </Slider>
           }
            
            </div>

            {/* </div> */}
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
      </div>
    </>
  );
}

export default Blog;
