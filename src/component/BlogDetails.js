import React, { useEffect, useState } from "react";
import BlogDetailsData from "../Data/BlogDetailsData.js";
import Image from "react-bootstrap/Image";
import '../assests/BlogDetails.css'
import { Link, useParams } from "react-router-dom";
import axios from "axios";



function BlogDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(()=>{
    axios.get(`https://plankton-app-dde9x.ondigitalocean.app/blog/data/${id}`)
    .then((res)=>{
      console.log("API Response:", res.data);

      const dataWithImages = [res.data].map(data => ({
        ...data,
        image_blog: `data:image/jpeg;base64,${data.image_base64}`
      }));
      
      console.log("Data with images:", dataWithImages);
      setDetails(dataWithImages)
      console.log("Data with images:", dataWithImages);

      const foundBlog = dataWithImages.find((blog) => blog.id == id);
      if (foundBlog) {
        setSelectedBlog(foundBlog);
      } else {
        // Handle the case where no matching blog is found
        console.log("No blog found for ID:", id);
      }
    })
    .catch((err)=>{
      console.log("API Error:", err);
    })
  },[id])

  if (!selectedBlog) {
    return <div>Loading...</div>;
  }


  return (
    <div class="container">
      
      <form class="container-fluid  form_container">
        <div class="input-group">
          <input
            type="text"
            className="form-control search_blog"
            placeholder="Search Blog"
            aria-describedby="basic-addon1"
          />
        </div>
        {/* <p>{id}</p> */}
      </form>
      <div
        className="square mt-5"
      >
        <div>
       
          <Image
           src={selectedBlog.image_base64}
            fluid
            style={{ float: "left", margin: "2px",paddingRight:"13px",height:"300px",width:"550px",borderRadius:"50px"}}
          />
        </div>
        <h3 className="title">
         {selectedBlog.title}
        </h3>
        <p className="paragraph">
         {selectedBlog.data}
        </p>
      </div>
      <div className="row also_blog">
<div className="col">

      <h3 className=" ms-2" >Also In Blog</h3>
</div>
      </div>
      <div className="row">

        {details.map((data) => (
          <div class="col">
          
            <div
              className="card mx-auto card_BlogDetails"
              style={{ border: "none", textAlign: "left" }}
              key={data.id}
            >
              <img src={data.image_base64} className="card-img-top blog_img" alt={data.title}  />
              <div className="card-body">
                <p className="card-text blog_title">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <Link to={`/blog/blogdetails/${data.id}`}
                  className="btn btn-primary"
                  onClick={()=>window.scrollTo(0,0)}
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
