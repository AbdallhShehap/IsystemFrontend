// ParentComponent.js
import React, { useState, useEffect } from "react";
import CardSlider from "./CardSlider";
import axios from 'axios';

function ParentComponent() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    window.scrollTo(0, 0);
    axios.get('https://plankton-app-dde9x.ondigitalocean.app/productdetails/getproductdetailsss')
      .then((res) => {
        console.log("Data received:", res.data);
        // const dataWithImages = res.data.map(data => ({
        //   ...data,
        //   image_main: `data:image/jpeg;base64,${data.image_base64}`
        // }));
        // console.log("Data with images:", dataWithImages);
        setCardsData(res.data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <div>
      {/* Render the CardSlider component once with the fetched data */}
      <CardSlider title={"title"} cardsData={cardsData} />
    </div>
  );
}

export default ParentComponent;
