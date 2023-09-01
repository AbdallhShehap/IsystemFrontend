import React, { useState } from "react";
import BlogDetailsData from "../Data/BlogDetailsData.js";
import Image from "react-bootstrap/Image";
import '../assests/BlogDetails.css'
function BlogDetails() {
  const [details, setDetails] = useState(BlogDetailsData);

  return (
    <div class="container">
      <form class="container-fluid mt-5">
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
        style={{ backgroundColor: "#F7F7F7", padding: "20px" }}
      >
        <div>
       
          <Image
            src={require("../images/mainCameraedit.png")}
            fluid
            style={{ float: "left", margin: "5px" }}
          />
        </div>
        <h3 className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam
          exercitationem, facere non ipsa magni fugit atis!
        </h3>
        <p className="paragraph">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur
        </p>
      </div>
      <div className="row">
<div className="col">

      <h3 className="ms-5" >Also In Blog</h3>
</div>
      </div>
      <div className="row">

        {details.map((data) => (
          <div class="col">
            <div
              className="card mx-auto"
              style={{ width: "18rem", border: "none", textAlign: "left" }}
              key={data.id}
            >
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <p className="card-text">{data.content}</p>
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
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
