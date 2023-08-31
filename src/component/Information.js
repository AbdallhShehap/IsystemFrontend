import React from "react";
import "../assests/Information.css";
function Information() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col col_icon">
            <div
              class="card mx-auto"
              style={{ width: "12rem",                height: "9rem",
               backgroundColor: "#F0F0F0" }}
            >
              <div class="card-body">
                <img
                  src={require("../images/credit.png")}
                  class="card-img-top icon"
                  alt="Laptop"
                />
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">
                  Pay your Apple product in 0% interest installments
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div
              class="card mx-auto"
              style={{
                width: "12rem",
                height: "9rem",
                backgroundColor: "#F0F0F0",
              }}
            >
              <div class="card-body">
                <img
                  src={require("../images/tradeIcon.png")}
                  class="card-img-top icon"
                  alt="Laptop"
                />
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">
                  Trade-in your current device for a new one
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div
              class="card mx-auto"
              style={{
                width: "12rem",
                height: "9rem",
                backgroundColor: "#F0F0F0",
              }}
            >
              <div class="card-body">
                <img
                  src={require("../images/training.png")}
                  class="card-img-top icon"
                  alt="Laptop"
                />
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">
                  Schedule your 1-2-1 training session{" "}
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div
              class="card mx-auto"
              style={{
                width: "12rem",
                height: "9rem",
                backgroundColor: "#F0F0F0",
              }}
            >
              <div class="card-body">
                <img
                  src={require("../images/audio.png")}
                  class="card-img-top icon"
                  alt="Laptop"
                />
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">
                  Check out our Audio category{" "}
                </h6>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div
              class="card mx-auto"
              style={{ width: "12rem",                height: "9rem",
               backgroundColor: "#F0F0F0" }}
            >
              <div class="card-body">
                <img
                  src={require("../images/accsisories.png")}
                  class="card-img-top icon"
                  alt="Laptop"
                />
                <h6 class="card-subtitle mb-2 text-body-secondary mt-3 ">
                  Discover our wide range of Apple products {" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
