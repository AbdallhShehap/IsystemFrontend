import React from "react";
import "../assests/Compare.css";
function CompareCard({ selected, selected2, selected3, selected4 }) {
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
              key={selected.p_id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2 ">
                  {Array.isArray(selected.images) &&
                    selected.images.length > 0 && (
                      <img
                        src={`http://localhost:1010/${selected.images[0].image_path}`}
                        alt=""
                        onError={(e) => console.log("Image load error", e)}
                        style={{height:"340px",width:"335px"}}
                        />
                    )}

                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected.product_name}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected.price}</p>
                      <p class="small oldPrice">{selected.old_price}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected.stock} </p>
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
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                   {selected.screen}
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
{selected.battery}                  </p>
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
                   camera front: {selected.camera_front}<br/>camera back: {selected.camera_back}
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
              key={selected2.p_id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                {Array.isArray(selected2.images) && selected2.images.length > 0 && (
  <img
    src={`http://localhost:1010/${selected2.images[0].image_path}`}
    alt=""
    onError={(e) => console.log("Image load error", e)}
    style={{height:"340px",width:"335px"}}
  />
)}

                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected2.product_name}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected2.price}</p>
                      <p class="small oldPrice">{selected2.old_price}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected2.stock} </p>
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
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                {selected2.screen}
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
{selected2.battery}                  </p>
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
                                       camera front: {selected2.camera_front}<br/>camera back: {selected2.camera_back}

                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {selected3 && Object.keys(selected3).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected3.p_id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                {Array.isArray(selected3.images) && selected3.images.length > 0 && (
  <img
    src={`http://localhost:1010/${selected3.images[0].image_path}`}
    alt=""
    style={{height:"340px",width:"335px"}}

    onError={(e) => console.log("Image load error", e)}
  />
)}

                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected3.product_name}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected3.price}</p>
                      <p class="small oldPrice">{selected3.old_price}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected3.stock} </p>
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
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
              {selected3.screen}
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
{selected3.battery}                  </p>
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
                                  camera front: {selected3.camera_front}<br/>camera back: {selected3.camera_back}

                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {selected4 && Object.keys(selected4).length > 0 ? (
          <>
            <div
              className="col-lg-3 col-md-6 col-sm-12 "
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              key={selected4.p_id}
            >
              <div className="d-flex flex-column">
                <div class="card card_info ms-2">
                {Array.isArray(selected4.images) && selected4.images.length > 0 && (
  <img
    src={`http://localhost:1010/${selected4.images[0].image_path}`}
    alt=""
    style={{height:"340px",width:"335px"}}

    onError={(e) => console.log("Image load error", e)}
  />
)}

                  <div class="d-flex justify-content-between p-3">
                    <p class="lead mb-0 card_title">{selected4.product_name}</p>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="small text-danger">{selected4.price}</p>
                      <p class="small oldPrice">{selected4.old_price}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{selected4.stock} </p>
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
                  </p>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                 {selected4.screen}
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
{selected4.battery}                  </p>
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
                   camera front: {selected4.camera_front}<br/>camera back: {selected4.camera_back}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CompareCard;
