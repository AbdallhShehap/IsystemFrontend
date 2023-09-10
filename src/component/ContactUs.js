import React,{useEffect} from "react";
import { Link } from "@react-email/link";
function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginTop: "60pt" }}>
      <img
        src={require("../images/contact_us_bg.jpg")}
        alt=""
        width={"100%"}
        height={"700pt"}
      />
      <div className="container ">
      
        <div className="row">
          <div className="col-lg-6">
            <div
              class="card"
              style={{
                height:"92%",
                backgroundColor: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                color: "#000",
              }}
            >
              <div class="card-body">
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2%",
                    marginBottom: "2%",
                    color: "#27579a",
                    fontWeight: "bold",
                  }}
                >
                  Feel free to contact us
                </h3>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nama"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    style={{
                      resize:
                        "vertical" /* Allow vertical resizing (optional) */,
                      minHeight: "100px",
                    }}
                  ></textarea>
                </div>
                <div class="d-grid gap-2">
                  <button
                    class="btn btn-primary"
                    type="button"
                    style={{ backgroundColor: "#27579a", marginTop: "2%" }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              class="card"
              style={{
                backgroundColor: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                color: "#000",
              }}
            >
              <div class="card-body">
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2%",
                    marginBottom: "2%",
                    color: "#27579a",
                    fontWeight: "bold",
                  }}
                >
                  Get in Touch
                </h3>
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Call Us:
                </h5>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/phone (3).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    00962 6 5903555
                  </h6>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/email (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}
                    marketing@modernsystemsco.com
                  </h6>
                </div>
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", textAlign: "center",marginTop:"2%" }}
                >
              Location

                </h5>
          
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/location (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}

                    Amman - Abdoun

Shamout ST.

                  </h6>
                </div>
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/location (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}
                    Amman - Khalda

Wasfi Tall ST.

                  </h6>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/location (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}
                    Amman - Abdali Mall - First floor - Gate 5.


                  </h6>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/location (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}
                    Amman - Swifieh - Fountain complex - Ground floor.

                  </h6>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <img src={require("../images/location (1).png")} alt="" /> */}
                  <h6 style={{ textAlign: "center", marginLeft: "2%" }}>
                    {" "}
                    Amman - Mecca St- White Stone Building - No 164

                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default ContactUs;
