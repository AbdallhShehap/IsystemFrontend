import React from "react";
import '../assests/Compare.css'
function CompareCard({ selected, selected2,selected3,selected4 }) {
  return (
    <div>
      <div className="row">
        {selected && Object.keys(selected).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected.id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2 " >
                  <img
                    src={require("../images/watch.png")}
                    class="card-img-top"
                    alt="Laptop"
                  />
                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected.title}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected.price}</p>
                      <p class="small oldPrice">{selected.oldPrice}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected.inStock} </p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <button
                        class="btn btn-outline-primary w-100 more_info_btn"
                        type="button"
                      >
                        More Info
                      </button>
                      <button type="button" class="btn btn-danger ms-2">
                        {" "}
                        <img
                          src={require("../images/cart.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" d-flex justify-content-center">
                  <img
                    src={require("../images/verticalLine.png")}
                    alt=""
                    height={"180px"}
                    width={"25px"}
                  />
                </div>
                <div className="inforamtion_device d-grid justify-content-center">
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  >
                    6.7
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Super Retina XDR display ProMotion technology Always-On
                    display
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/battery.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Up to 29 hours of video playback
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/camera.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-5 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
                    Engine for incredible detail and color Autofocus on
                    TrueDepth front camera
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {selected2 && Object.keys(selected2).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected2.id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                  <img
                    src={require("../images/watch.png")}
                    class="card-img-top"
                    alt="Laptop"
                  />
                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected2.title}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected2.price}</p>
                      <p class="small oldPrice">{selected2.oldPrice}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected2.inStock} </p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <button
                        class="btn btn-outline-primary w-100 more_info_btn"
                        type="button"
                      >
                        More Info
                      </button>
                      <button type="button" class="btn btn-danger ms-2">
                        {" "}
                        <img
                          src={require("../images/cart.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" d-flex justify-content-center">
                  <img
                    src={require("../images/verticalLine.png")}
                    alt=""
                    height={"180px"}
                    width={"25px"}
                  />
                </div>
                <div className="inforamtion_device d-grid justify-content-center">
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  >
                    6.7
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Super Retina XDR display ProMotion technology Always-On
                    display
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/battery.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Up to 29 hours of video playback
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/camera.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-5 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
                    Engine for incredible detail and color Autofocus on
                    TrueDepth front camera
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
""        )}
 {selected3 && Object.keys(selected3).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected3.id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                  <img
                    src={require("../images/watch.png")}
                    class="card-img-top"
                    alt="Laptop"
                  />
                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected3.title}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected3.price}</p>
                      <p class="small oldPrice">{selected3.oldPrice}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected3.inStock} </p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <button
                        class="btn btn-outline-primary w-100 more_info_btn"
                        type="button"
                      >
                        More Info
                      </button>
                      <button type="button" class="btn btn-danger ms-2">
                        {" "}
                        <img
                          src={require("../images/cart.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" d-flex justify-content-center">
                  <img
                    src={require("../images/verticalLine.png")}
                    alt=""
                    height={"180px"}
                    width={"25px"}
                  />
                </div>
                <div className="inforamtion_device d-grid justify-content-center">
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  >
                    6.7
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Super Retina XDR display ProMotion technology Always-On
                    display
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/battery.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Up to 29 hours of video playback
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/camera.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-5 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
                    Engine for incredible detail and color Autofocus on
                    TrueDepth front camera
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
""        )}
 {selected4 && Object.keys(selected4).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected4.id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                  <img
                    src={require("../images/watch.png")}
                    class="card-img-top"
                    alt="Laptop"
                  />
                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected4.title}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected4.price}</p>
                      <p class="small oldPrice">{selected4.oldPrice}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected4.inStock} </p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <button
                        class="btn btn-outline-primary w-100 more_info_btn"
                        type="button"
                      >
                        More Info
                      </button>
                      <button type="button" class="btn btn-danger ms-2">
                        {" "}
                        <img
                          src={require("../images/cart.png")}
                          class="card-img-top"
                          alt="Laptop"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" d-flex justify-content-center">
                  <img
                    src={require("../images/verticalLine.png")}
                    alt=""
                    height={"180px"}
                    width={"25px"}
                  />
                </div>
                <div className="inforamtion_device d-grid justify-content-center">
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "40px", textAlign: "center" }}
                  >
                    6.7
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Super Retina XDR display ProMotion technology Always-On
                    display
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/battery.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-0 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Up to 29 hours of video playback
                  </p>
                  <div className=" d-flex justify-content-center">
                    <img
                      src={require("../images/camera.png")}
                      alt=""
                      height={"30px"}
                      width={"40px"}
                      className="mt-5"
                    />
                  </div>
                  <p
                    className="mb-5 mt-3"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
                    Engine for incredible detail and color Autofocus on
                    TrueDepth front camera
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
""        )}
      </div>
    </div>
  );
}

export default CompareCard;
