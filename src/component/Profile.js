import React, { useState,useEffect,useContext } from "react";
import "../assests/Profile.css";
import axios from "axios";
import { useUserContext } from '../component/UserContext.js';

// import {useUserContext} from '../component/UserContext.js'
function Profile() {
  const { userData } = useUserContext();
  const { username, email } = userData;
  const [isEditing, setIsEditing] = useState(false);
  // const [username, setUsername] = useState("username");
  // const [email, setEmail] = useState("email");
  const [image, setImage] = useState(null);
// const {user}=useUserContext()
useEffect(() => {
  console.log("Fetching data...");
  window.scrollTo(0, 0);
 
}, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add logic here to save the edited data to your backend or perform any other necessary actions.
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        marginTop: "101pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div style={{ width: "100%", textAlign: "center" }}>
              <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                <img
                  src={image || "../images/1q.jpeg"}
                  alt="Avatar"
                  className="profile_img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              {isEditing ? (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              ) : null}
            </div>
            <p style={{ textAlign: "center", marginTop: "10%" }}>{username}</p>
          </div>
          <div className="col-lg-8">
            <h2>Profile</h2>
            <hr />
            {isEditing ? (
              <div>
                <p>
                  Username:
                  <input
                    type="text"
                    value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </p>
                <p>
                  Email:
                  <input
                    type="email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </p>
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <button onClick={handleEditClick}>Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;