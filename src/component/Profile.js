import React from "react";
import "../assests/Profile.css";
function Profile() {
  return (
    <div style={{ marginTop: "101pt",display:"flex",justifyContent:"center",alignItems:"center",  height:" 50vh"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="box_profile">
              <div style={{ margin: "10% 0 10% 0" }}>
                <img
                  src={require("../images/1q.jpeg")}
                  alt="Avatar"
                  className="profile_img"
                />
                <p style={{ textAlign: "center", marginTop: "10%" }}>
                  username
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
<h2>Profile</h2>
<hr/>
<p>Username:username</p>
<p>Email:email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
