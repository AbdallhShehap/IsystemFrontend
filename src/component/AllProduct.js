import React, { useState } from "react";
import DataCategory from "../Data/DataCategory.js";
// import '../assests/Cards.css'
import "../assests/Category.css";
function AllProduct() {
  const [data, setData] = useState(DataCategory);
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          {data.map((data) => (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={data.id}>
              <div class="card">
                <img src={data.image} class="card-img-top" alt="Laptop" />
                <div class="d-flex justify-content-between ps-3 pt-3">
                  <p
                    class="lead mb-0 card_title category_title"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {data.title}{" "}
                  </p>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
                      Starting at{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "17px",
                        }}
                      >
                        {data.price}
                      </span>
                    </p>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">in stock </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
