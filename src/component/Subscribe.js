import React, { useState } from "react";
import "../assests/Subscribe.css";
import Button from "@mui/material/Button";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
function Subscribe() {
  const[email,setEmail]=useState("")
  const handlePost = async () => {
    try {
      const response = await axios.post("http://localhost:1010/subscribe/add", {
        email: email, // Use the provided title
   
      });
      console.log(response.data);
      // Call the onSave callback with the data
      // setAdd(response.data);
    } catch (error) {
      console.log(`Error fetching post data  ${error}`);
    }
  };
  return (
    <div>
     <div className="subscrib">
  <div className="text">
    <div className="box_subscribe">
      <p className="subscribe_title">
        Subscribe to our newsletter and be the first who benefits from our
        offers. Promotions and new product launches straight to your
        mailbox.
      </p>
    </div>

    <div className="subscribe">
  <MDBInput
    placeholder="Enter your email"
    id="form1 send"
    type="text"
    className="input_subscribe"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
  />

  <Button variant="contained" id="subscribe_btn" style={{ marginLeft: '10px' }} onClick={handlePost}>
    Subscribe
  </Button>
</div>

  </div>
</div>

    </div>
  );
}

export default Subscribe;