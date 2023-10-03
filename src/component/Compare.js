import React, { useEffect, useState } from "react";
import CardsData from "../Data/CardsData.js";
import "../assests/Compare.css";
import CompareCard from "./CompareCard.js";
import axios from "axios";
function Compare() {
  const [dataCategory, setDataCategory] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  const [selected4, setSelected4] = useState([]);

  const [firstCombo, setFirstCombo] = useState("");
  const [secondCombo, setSecondCombo] = useState("");
  const [thirdCombo, setThirdCombo] = useState("");
  const [fourCombo, setFourCombo] = useState("");
  const [message, setMessage] = useState("");
  const [getImg, setGetImg] = useState([]);
  const [product_id, setProduct_id] = useState(null);

  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1010/productdetails/getproductdetails"
        );
        setDataCategory(response.data);
        console.log(dataCategory)
      } catch (error) {
        console.log(`Error getting product from frontend: ${error}`);
      }
    };
    fetchImages(); // Call fetchImages here
    fetchData();

  }, []);
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1010/newimgproducts/images/${product_id}`
      );
      const relativePaths = response.data.images;
  
      // Convert relative paths to absolute URLs
      // const absolutePaths = relativePaths.map(relativePath => {
      //   return `http://localhost:1010${relativePath}`;
      // });
  
      setGetImg(relativePaths); // Update getImg state with absolute image URLs
    } catch (error) {
      console.log(`Error fetching images: ${error}`);
    }
  };
  


  useEffect(() => {
    // Log getImg when it changes
    console.log("getimg", getImg);
  }, [getImg]);

  function handleChange1(e) {
    const target = e.target.value;
    setFirstCombo(target);
    const device = dataCategory.find((mobile) => mobile.p_id == target);
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
    const device = dataCategory.find((mobile) => mobile.p_id == target);
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
    const device = dataCategory.find((mobile) => mobile.p_id == target);
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
    const device = dataCategory.find((mobile) => mobile.p_id == target);
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
      <div className="container-fluid container_compare">

      <div className="row">
        <div className="col compare_title">
          <h3 className="compare_title">Compare  models</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
          <select
            value={firstCombo}
            onChange={handleChange1}
            className="select_box"
          >
                          <option value="static">Select Option</option>

            {dataCategory.map((item) => (
              <option value={item.p_id} key={item.p_id} className="option_selected">
                {item.product_name}
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
                          <option value="static">Select Option</option>

            {dataCategory.map((item) => (
              <option value={item.p_id} key={item.p_id}>
                {item.product_name}
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
              <option value="static">Select Option</option>

            {dataCategory.map((item) => (
              <option value={item.p_id} key={item.p_id}>
                {item.product_name}
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
                          <option value="static">Select Option</option>

            {dataCategory.map((item) => (
              <option value={item.p_id} key={item.p_id}>
                {item.product_name}
              </option>
            ))}
          </select>
        </div>
      </div>


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


