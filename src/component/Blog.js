import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Blog() {
  const [slider, setSlider] = useState(null);
  // const [cardsData, setCardsData] = useState(CardsData);
  const [blogData, setBlogData] = useState([]);
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

  useEffect(()=>{
    axios.get('https://jellyfish-app-6rwoy.ondigitalocean.app/blog/data')
    .then((res)=>{
      const dataWithImages = res.data.map(data => ({
        ...data,
        image_blog: `data:image/jpeg;base64,${data.image_base64}`
      }));
      
      console.log("Data with images:", dataWithImages);
      setBlogData(dataWithImages)
      console.log("Data with images:", dataWithImages);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  console.log("Blog Data:", blogData);


  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchFlag(true);
    setSearchField(e.target.value);
    console.log("Search Field:", e.target.value);
  };
  

  const [filteredBlogData, setFilteredBlogData] = useState([]);

  // Update the filtered data whenever the searchField changes
  useEffect(() => {
    if (searchField) {
      const filteredData = blogData.filter((data) =>
        data.title.toLowerCase().includes(searchField.toLowerCase())
      );
      setFilteredBlogData(filteredData);
    } else {
      // If the search input is empty, show all data
      setFilteredBlogData(blogData);
    }
  }, [searchField, blogData]);

  
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
          <h3 className="mt-5 mb-4" >Our Blog</h3>
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

            {searchFlag ? (
  <Slider {...settings} ref={(slider) => setSlider(slider)}>

    {filteredBlogData.map((data) => (
      <div key={data.blog_id}>
        <div class="col-lg-12 col-md-12 m-1">
          <div className="row">
            <div
              className="card mx-auto"
              style={{
                width: "25rem",
                border: "none",
                textAlign: "left",
              }}
              key={data.blog_id}
            >
            <img src={data.image_blog} className="card-img-top" alt={data.title} />

              <div className="card-body">
                <p className="card-text">{data.title}</p>
                <small
                  className="card-title blog_title"
                  style={{ color: "#BEBEBE" }}
                >
                  {data.date}
                </small>
                <br></br>
                <Link
                  to={`blogdetails/${data.blog_id}`}
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
) : (
  <Slider {...settings} ref={(slider) => setSlider(slider)}>
                  {filteredBlogData
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
                              key={data.blog_id}
                            >
                            <img src={data.image_blog} className="card-img-top" alt={data.title} />

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
                                  to={`blogdetails/${data.blog_id}`}
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
                </Slider>)}

 
            
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








// import React, { useEffect, useState } from "react";
// import Image from "react-bootstrap/Image";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// function BlogDetails() {
//   const [details, setDetails] = useState([]);
//   const { id } = useParams();
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     axios.get(`http://localhost:1010/blog/data/${id}`)
//       .then((res) => {
//         const dataWithImages = res.data.map((data) => ({
//           ...data,
//           image_blog: `data:image/jpeg;base64,${data.image_base64}`,
//         }));

//         console.log("Data with images:", dataWithImages);
//         setDetails(dataWithImages);

//         // Set the selected blog here
//         const foundBlog = dataWithImages.find((blog) => blog.id == id);
//         setSelectedBlog(foundBlog);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   if (!selectedBlog) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       {/* Your code for displaying the selected blog */}
//     </div>
//   );
// }

// export default BlogDetails;
