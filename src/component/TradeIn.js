import React, { useEffect, useState } from "react";
import "../assests/TradeIn.css";
import { Link } from "@mui/material";
function TradeIn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeTab, setActiveTab] = useState("active"); // Initialize active tab state

  // Event handler to set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container margin">
      <div className=" container_trade">
        <div className="apple_tradein">
          <h3>Apple Trade In</h3>
          <h1>Turn the device you have into the one you want.</h1>
          <p>
            It’s easy to trade in your eligible device for credit toward your
            next purchase, or get an Apple Gift Card you can use
            anytime.Footnote1 If your device isn’t eligible for credit, we’ll
            recycle it for free. No matter the model or condition, we can turn
            it into something good for you and good for the planet.
          </p>
          <img
            src={require("../images/tradeinapple.webp")}
            alt=""
            width={"100%"}
          />
          <h1 className="credit">Get credit toward a purchase today.</h1>
          <p>
            Trade in when you buy a new product and we’ll apply the value toward
            your purchase or recycle your device for free.
          </p>
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <p
            className={`nav-link ${
              activeTab === "active" ? "active" : ""
            } active`}
            onClick={() => handleTabClick("active")}
          >
            iPhone
          </p>
        </li>
        <li className="nav-item">
          <p
            className={`nav-link ${activeTab === "link" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("link")}
          >
            iPad
          </p>
        </li>
        <li className="nav-item">
          <p
            className={`nav-link ${activeTab === "link2" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabClick("link2")}
          >
            Mac
          </p>
        </li>
        <li className="nav-item">
          <p
            className={`nav-link ${activeTab === "link3" ? "active" : ""}`}
            onClick={() => handleTabClick("link3")}
          >
            Apple Watch
          </p>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === "active" ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <h6 className="device">Your device</h6>
                <ul className="li_order">
                  <li className="li_order">iPhone 12 Pro Max </li>
                  <li>iPhone 12 Pro </li>
                  <li>iPhone 12 </li>
                  <li>iPhone 12 mini </li>
                  <li>iPhone SE (2nd generation) </li>
                </ul>
              </div>
              <div className="col">
                <h6 className="device">Estimated trade-in value</h6>
                <ul className="li_order">
                  <li >Up to JOD490</li>
                  <li >Up to JOD425</li>
                  <li >Up to JOD320</li>
                  <li>Up to JOD240</li>
                  <li>Up to JOD110</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab === "link" && <div>Link Tab Content</div>}
        {activeTab === "link2" && <div>Link Tab 2 Content</div>}
        {activeTab === "link3" && <div>Link Tab 3 Content</div>}
      </div>
      <div className="container_upgrade">
        <p>Trade in & Upgrade Your Apple Device.</p>
        <p>It has never been easier to upgrade your old device for a new one at a lower cost.
</p>
<p>At iSystem, you can trade-in your eligible old device and get a new one immediately and pay the difference. Also you can trade in your eligible device for credit toward your next purchase.</p>
    <p>Does your device qualify?
</p>
<p>To receive your credit for trading in your old device, you must be able to tick off the following</p>
<ul>
    <li>Your device (iPhone, Mac, Apple Watch and iPad) powers up and functions normally</li>
    <li>Your device display is in good condition (iPhone, Mac, Apple Watch and iPad)</li>
    <li>Your device enclosure is in good condition (free from dents).</li>
    <li> Your device has no obvious signs of liquid contact (iPhone, Mac, Apple Watch and iPad)
</li>
<li> Your device keys or buttons are in good working condition (iPhone, Mac, Apple Watch and iPad)</li>
<li>You have the device original power cable and adapter (Phone, Mac, Apple Watch and iPad)
</li>
<li>Your device has no iCloud account it.
</li>
<li>Your device is signed off from Find My iPhone</li>
</ul>
<p>Frequently Asked Questions:
</p>
<ol>
    <li>Which devices are eligible for trade-in?
</li>
<p>Any iPhone, Mac, Apple Watch and iPad that meet the above conditions can qualify for trade-in.</p>
<li> Can I trade-in my iPhone, Mar, Apple Watch and iPad and receive any discount or offer on a new device?</li>
<p>Trade-in is available to individuals purchasing a new iPhone, Mac, Apple Watch and iPad instore.</p>
<li>Will my online valuation be the same when I visit my local iSystem Store?</li>
<p>Your online and in store valuations may vary, after testing the device.
</p>
<li>Can I trade in online?</li>
<p>Trade in is only available in store.
</p>
<li> Do I have to include accessories We chargers and cables?</li>
<p>In some cases, your final trade in value can vary depending on if you include por power adapter and other accessories or not. But you don't have to</p>
<li> can I pay the difference between the trade in value and the new device on installment.

</li>
<p>Yes, if you are a customer for any of the banks iSystem works with on installment, you can pay the rest on installment.

</p>
</ol>
     </div>
    </div>
  );
}

export default TradeIn;
