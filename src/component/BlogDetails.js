import React, { useEffect, useState } from "react";
import BlogDetailsData from "../Data/BlogDetailsData.js";
import Image from "react-bootstrap/Image";
import '../assests/BlogDetails.css'
import { Link, useParams } from "react-router-dom";




function BlogDetails() {
  const [details, setDetails] = useState(BlogDetailsData.slice(0, 3));
  let {id}=useParams();
  let [selectedBlog,setSelectedBlog]=useState([]);
  selectedBlog=BlogDetailsData.find((blog)=>blog.id==id)
  console.log(selectedBlog)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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
        
      </form>
      <div
        class="square mt-5"
        style={{ backgroundColor: "#F7F7F7", padding: "20px",height:"46rem" }}
      >
        <div>
       
          <Image
            src={selectedBlog.image}
            fluid
            style={{ float: "left", margin: "2px",paddingRight:"13px",height:"300px",width:"550px",borderRadius:"50px"}}
          />
        </div>
        <h3 className="title">
         {selectedBlog.title}
        </h3>
        <p className="paragraph">
         {selectedBlog.desc}
        </p>
      </div>
      <div className="row">
<div className="col">

      <h3 className="mt-5 ms-2" >Also In Blog</h3>
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
              <img src={require('../images/appleEvent.png')} className="card-img-top blog_img" alt={data.title}  />
              <div className="card-body">
                <p className="card-text blog_title">{data.title}</p>
                <small className="card-title" style={{ color: "#BEBEBE" }}>
                  {data.date}
                </small>
                <br></br>
                <Link to={`${data.id}`}
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
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
