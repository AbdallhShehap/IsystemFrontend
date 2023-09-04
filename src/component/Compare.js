import React, { useState } from "react";
import CardsData from "../Data/CardsData.js";
import "../assests/Compare.css";
import CompareCard from "./CompareCard.js";
function Compare() {
  const [dataCategory, setDataCategory] = useState(CardsData);
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [selected4, setSelected4] = useState([]);

  const [firstCombo, setFirstCombo] = useState("");

  const [secondCombo, setSecondCombo] = useState("");
  const [thirdCombo, setThirdCombo] = useState("");
  const [fourCombo, setFourCombo] = useState("");

  function handleChange1(e) {
    const target = e.target.value;
    setFirstCombo(target);
    const device = dataCategory.find((mobile) => mobile.id == target);
    console.log(device);
    setSelected(device);
    if (device) {
      console.log(device);
    } else {
      console.log("Device not found");
    }
  }
  function handleChange2(e) {
    const target = e.target.value;
    setSecondCombo(target);
    const device = dataCategory.find((mobile) => mobile.id == target);
    console.log(device);
    setSelected2(device);
    if (device) {
      console.log(device);
    } else {
      console.log("Device not found");
    }
  }
  function handleChange3(e) {
    const target = e.target.value;
    setThirdCombo(target);
    const device = dataCategory.find((mobile) => mobile.id == target);
    console.log(device);
    setSelected3(device);
    if (device) {
      console.log(device);
    } else {
      console.log("Device not found");
    }
  }
  function handleChange4(e) {
    const target = e.target.value;
    setFourCombo(target);
    const device = dataCategory.find((mobile) => mobile.id == target);
    console.log(device);
    setSelected4(device);
    if (device) {
      console.log(device);
    } else {
      console.log("Device not found");
    }
  }
  console.log(` select first ${selected}`); // Log the id of the selected option
  console.log(secondCombo); // Log the id of the selected option
  console.log(thirdCombo); // Log the id of the selected option
  console.log(fourCombo); // Log the id of the selected option

  return (
    <>
      <div className="container-fluid">

      <div className="row">
        <div className="col compare_title">
          <h3 className="compare_title">Compare iPhone models</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <select
            value={firstCombo}
            onChange={handleChange1}
            className="select_box"
          >
            {dataCategory.map((item) => (
              <option value={item.id} key={item.id} className="option_selected">
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <select
            value={secondCombo}
            onChange={handleChange2}
            className="select_box"
          >
            {dataCategory.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <select
            value={thirdCombo}
            onChange={handleChange3}
            className="select_box"
          >
            {dataCategory.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <select
            value={fourCombo}
            onChange={handleChange4}
            className="select_box"
          >
            {dataCategory.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* cards */}

      {/* <div className="row">
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
                <div class="card card_info ms-2">
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
        ) :(
          <p>No device selected</p>

         )}

      </div> */}
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <CompareCard selected={selected} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <CompareCard selected2={selected2} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <CompareCard selected3={selected3} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <CompareCard selected4={selected4} />
        </div>
      </div>
      </div>
      {/* <compareCard select={select2}/>
      <compareCard select={select3}/> */}
    </>
  );
}

export default Compare;

// import React, { useState } from "react";
// import CardsData from "../Data/CardsData.js";
// import "../assests/Compare.css";

// function Compare() {
//   const [dataCategory, setDataCategory] = useState(CardsData);
//   const [firstCombo, setFirstCombo] = useState("");
//   const [secondCombo, setSecondCombo] = useState("");
//   const [thirdCombo, setThirdCombo] = useState("");
//   const [fourCombo, setFourCombo] = useState("");

//   // Define a function to find the device data based on the selected value
//   const findDevice = (selectedValue) => {
//     return dataCategory.find((mobile) => mobile.id == selectedValue);
//   };

//   return (
//     <>
//       {/* Your existing JSX content */}

//       <div className="row">
//         <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
//           <select value={firstCombo} onChange={(e) => setFirstCombo(e.target.value)}>
//             {dataCategory.map((item) => (
//               <option value={item.id} key={item.id}>
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
//           <select value={secondCombo} onChange={(e) => setSecondCombo(e.target.value)}>
//             {dataCategory.map((item) => (
//               <option value={item.id} key={item.id}>
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
//           <select value={thirdCombo} onChange={(e) => setThirdCombo(e.target.value)}>
//             {dataCategory.map((item) => (
//               <option value={item.id} key={item.id}>
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
//           <select value={fourCombo} onChange={(e) => setFourCombo(e.target.value)}>
//             {dataCategory.map((item) => (
//               <option value={item.id} key={item.id}>
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Display cards based on selected values */}
//       <div className="row">
//         {firstCombo && (
//           <div
//             className="col-lg-3 col-md-6 col-sm-12"
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//             key={firstCombo}
//           >
//             {/* Render card based on the data returned by findDevice function */}
//             {/* Example: */}
//             {findDevice(firstCombo) ? (
//               <div className="d-flex flex-column">
//      <div class="card card_info ms-2">
//                    <img
//                      src={require("../images/watch.png")}
//                      class="card-img-top"
//                      alt="Laptop"
//                    />
//                    <div class="d-flex justify-content-between p-3">
//                      <p class="lead mb-0 card_title">{firstCombo.title}</p>
//                    </div>
//                    <div class="card-body">
//                      <div class="d-flex justify-content-between">
//                       <p class="small text-danger">{firstCombo.price}</p>
//                       <p class="small oldPrice">{firstCombo.oldPrice}</p>
//                      </div>
//                      <div class="d-flex justify-content-between mb-2">
//                        <p class="mb-0 inStock">{firstCombo.inStock} </p>
//                      </div>

//                      <div class="d-flex justify-content-between mb-3">
//                        <button
//                          class="btn btn-outline-primary w-100 more_info_btn"
//                          type="button"
//                        >
//                          More Info
//                        </button>
//                        <button type="button" class="btn btn-danger ms-2">
//                          {" "}
//                          <img
//                            src={require("../images/cart.png")}
//                            class="card-img-top"
//                            alt="Laptop"
//                          />
//                        </button>
//                      </div>
//                    </div>
//                  </div>

//                  <div className=" d-flex justify-content-center">
//                    <img
//                      src={require("../images/verticalLine.png")}
//                      alt=""
//                      height={"180px"}
//                      width={"25px"}
//                   />
//                  </div>
//                  <div className="inforamtion_device d-grid justify-content-center">
//                    <p
//                      className="mb-0 mt-3"
//                      style={{ fontSize: "40px", textAlign: "center" }}
//                    >
//                      6.7
//                    </p>
//                    <p
//                      className="mb-0"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                   >
//                      Super Retina XDR display ProMotion technology Always-On
//                      display
//                    </p>
//                    <div className=" d-flex justify-content-center">
//                      <img
//                        src={require("../images/battery.png")}
//                        alt=""
//                        height={"30px"}
//                        width={"40px"}
//                        className="mt-5"
//                      />
//                    </div>
//                    <p
//                      className="mb-0 mt-3"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                   >
//                      Up to 29 hours of video playback
//                    </p>
//                    <div className=" d-flex justify-content-center">
//                      <img
//                        src={require("../images/camera.png")}
//                        alt=""
//                        height={"30px"}
//                        width={"40px"}
//                        className="mt-5"
//                      />
//                    </div>
//                    <p
//                      className="mb-5 mt-3"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                    >
//                      Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
//                      Engine for incredible detail and color Autofocus on
//                      TrueDepth front camera
//                    </p>
//                  </div>
//                </div>

//             ) : (
//               <p>No device selected</p>
//             )}
//           </div>
//         )}

//         {/* Repeat the above pattern for the other combo boxes */}
//         {/* ... */}
//         {findDevice(secondCombo) ? (
//               <div className="d-flex flex-column">
//      <div class="card card_info ms-2">
//                    <img
//                      src={require("../images/watch.png")}
//                      class="card-img-top"
//                      alt="Laptop"
//                    />
//                    <div class="d-flex justify-content-between p-3">
//                      <p class="lead mb-0 card_title">{secondCombo.title}</p>
//                    </div>
//                    <div class="card-body">
//                      <div class="d-flex justify-content-between">
//                       <p class="small text-danger">{secondCombo.price}</p>
//                       <p class="small oldPrice">{secondCombo.oldPrice}</p>
//                      </div>
//                      <div class="d-flex justify-content-between mb-2">
//                        <p class="mb-0 inStock">{secondCombo.inStock} </p>
//                      </div>

//                      <div class="d-flex justify-content-between mb-3">
//                        <button
//                          class="btn btn-outline-primary w-100 more_info_btn"
//                          type="button"
//                        >
//                          More Info
//                        </button>
//                        <button type="button" class="btn btn-danger ms-2">
//                          {" "}
//                          <img
//                            src={require("../images/cart.png")}
//                            class="card-img-top"
//                            alt="Laptop"
//                          />
//                        </button>
//                      </div>
//                    </div>
//                  </div>

//                  <div className=" d-flex justify-content-center">
//                    <img
//                      src={require("../images/verticalLine.png")}
//                      alt=""
//                      height={"180px"}
//                      width={"25px"}
//                   />
//                  </div>
//                  <div className="inforamtion_device d-grid justify-content-center">
//                    <p
//                      className="mb-0 mt-3"
//                      style={{ fontSize: "40px", textAlign: "center" }}
//                    >
//                      6.7
//                    </p>
//                    <p
//                      className="mb-0"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                   >
//                      Super Retina XDR display ProMotion technology Always-On
//                      display
//                    </p>
//                    <div className=" d-flex justify-content-center">
//                      <img
//                        src={require("../images/battery.png")}
//                        alt=""
//                        height={"30px"}
//                        width={"40px"}
//                        className="mt-5"
//                      />
//                    </div>
//                    <p
//                      className="mb-0 mt-3"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                   >
//                      Up to 29 hours of video playback
//                    </p>
//                    <div className=" d-flex justify-content-center">
//                      <img
//                        src={require("../images/camera.png")}
//                        alt=""
//                        height={"30px"}
//                        width={"40px"}
//                        className="mt-5"
//                      />
//                    </div>
//                    <p
//                      className="mb-5 mt-3"
//                      style={{ fontSize: "15px", textAlign: "center" }}
//                    >
//                      Pro camera system 48MP Main | Ultra Wide Telephoto Photonic
//                      Engine for incredible detail and color Autofocus on
//                      TrueDepth front camera
//                    </p>
//                  </div>
//                </div>

//             ) : (
//               <p>No device selected</p>
//             )}

//       </div>
//     </>
//   );
// }

// export default Compare;
