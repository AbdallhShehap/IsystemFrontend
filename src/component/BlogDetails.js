import React, { useEffect, useState } from "react";
import BlogDetailsData from "../Data/BlogDetailsData.js";
import Image from "react-bootstrap/Image";
import "../assests/BlogDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function BlogDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState([]);
  let [blog, setBlog] = useState([]);
  const [searchFlag,setSearchFlag]=useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://monkfish-app-wyvrc.ondigitalocean.app/blog/data`)
      .then((res) => {
        console.log("API Response:", res.data);

        // const dataWithImages = [res.data].map((data) => ({
        //   ...data,
        //   image_blog: `data:image/jpeg;base64,${data.image_base64}`,
        // }));

        // console.log("Data with images:", dataWithImages);
        setBlog(res.data);
        
        console.log("blog",blog)
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

useEffect(() => {
  axios
    .get(`https://monkfish-app-wyvrc.ondigitalocean.app/blog/data/${id}`)
    .then((res) => {
      console.log("API Response:", res.data);
      
          // const dataWithImages = [res.data].map((data) => ({
        //   ...data,
        //   image_blog: `data:image/jpeg;base64,${data.image_base64}`,
        // }));

        // console.log("Data with images:", dataWithImages);
      setDetails(res.data);
    })
    .catch((err) => {
      console.log("API Error:", err);
    });
}, [id]);

useEffect(() => {
  // Move the code that depends on the "details" state here
  console.log("details", details);

  if (details.length > 0) {
    const foundBlog = details.find((blog) => blog.id_blogs == id);
    setSelectedBlog(foundBlog);
    console.log("selectedBlog", selectedBlog);
  }
}, [details, id]);

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
    const filteredData = blog.filter((data) =>
      data.title.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredBlogData(filteredData);
  } else {
    // If the search input is empty, show all data
    setFilteredBlogData(blog);
  }
}, [searchField, blog]);

  return (
    <div class="container">
      <form class="container-fluid  form_container">
        <div class="input-group">
          <input
            type="text"
            className="form-control search_blog"
            placeholder="Search Blog"
            aria-describedby="basic-addon1"
            value={searchField}
            onChange={handleChange}
          />
        </div>
        {/* <p>{id}</p> */}
      </form>
      { searchField && searchFlag  ? (
          filteredBlogData.map((data) => (
            <div key={data.id_blogs}>
              <div class="col-lg-12 col-md-12 m-1">
                <div className="row">
                  <div
                    className="card mx-auto"
                    style={{
                      width: "25rem",
                      border: "none",
                      textAlign: "left",
                    }}
                    key={data.id_blogs}
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
                        to={`/blog/blogdetails/${data.id_blogs}`}
                        href="#"
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "#27579A",
                          border: "none",
                          marginTop: "2%",
                        }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          ) : (
  
      selectedBlog && (

      <div className="square mt-5">
        
        <div>
          <Image
            src={require("../images/appleEvents.png")}
            //  src={selectedBlog.image_base64}
            fluid
            style={{
              float: "left",
              margin: "2px",
              paddingRight: "13px",
              height: "300px",
              width: "550px",
              borderRadius: "50px",
            }}
          />
        </div>
        <h3 className="title">{selectedBlog.title} </h3>
        <p className="paragraph"> {selectedBlog.details}</p>
      </div>
     ))}

      <div className="row also_blog">
        <div className="col">
          <h3 className=" ms-2">Also In Blog</h3>
        </div>
      </div>
      <div className="row">
        {blog.map((data) => (
          <div class="col">
            <div
              className="card mx-auto card_BlogDetails"
              style={{ border: "none", textAlign: "left" }}
              key={data.id_blogs}
            >
              <img
                src={data.image_base64}
                className="card-img-top blog_img"
                alt={data.title}
              />
              <div className="card-body">
                <p className="card-text blog_title">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <Link
                  to={`/blog/blogdetails/${data.id_blogs}`}
                  className="btn btn-primary"
                  onClick={() => window.scrollTo(0, 0)}
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
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;

