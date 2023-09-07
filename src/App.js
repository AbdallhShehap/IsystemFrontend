import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layouts from "./component/Layouts.js";
import ProductDetails from "./component/ProductDetails .js";
import IMac from "./component/IMac.js";
import IPad from "./component/IPad.js";
import Carousel from "./component/IPhone.js";
import Watch from "./component/Watch.js";
import Audio from "./component/Audio.js";
import AppleTv from "./component/AppleTv.js";
import Accessories from "./component/Accessories.js";
import ISystemCare from "./component/ISystemCare.js";
import Registration from "./component/Registration";
import Home from "./pages/Home.js";
import Cart from "./component/Cart.js";
import Blog from "./component/Blog.js";
import BlogDetails from "./component/BlogDetails.js";
import Compare from "./component/Compare.js";
import Dashboard from "./Dashboard/Dashboard.js";
import InstallmentPlan from "./component/InstallmentPlan.js";
import AboutUs from "./component/AboutUs.js";
import JoinTeam from "./component/JoinTeam.js";
import ContactUs from "./component/ContactUs.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layouts />}>
            {/* <Route/> */}
            <Route path="productdetails/:id" element={<ProductDetails />} />
            <Route path="home" element={<Home />} />
            <Route path="mac" element={<IMac />} />
            <Route path="ipad" element={<IPad />} />
            <Route path="iphone" element={<Carousel />} />
            <Route path="watch" element={<Watch />} />
            <Route path="audio" element={<Audio />} />
            <Route path="appletv" element={<AppleTv />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="isystemcare" element={<ISystemCare />} />
            <Route path="cart" element={<Cart />} />
            <Route path="blog/blogdetails/:id" element={<BlogDetails />} />
            <Route path="blog" element={<Blog />} />
            <Route path="registration" element={<Registration />} />
            <Route path="compare" element={<Compare />} />
            <Route
              path="cart/productdetails/:id"
              element={<ProductDetails />}
            />
            <Route path="blog/blogdetails/:id" element={<BlogDetails />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="installmentplan" element={<InstallmentPlan />} />
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="jointeam" element={<JoinTeam/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
          </Route>
          {/* <Route path="login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
