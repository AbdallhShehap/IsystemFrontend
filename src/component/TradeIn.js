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
                  <li>iPhone 11 Pro Max</li>
                  <li>iPhone 11 Pro</li>
                  <li>iPhone 11 </li>
                  <li>iPhone XS Max</li>
                  <li>iPhone XS</li>
                  <li>iPhone XR</li>
                  <li>iPhone X</li>
                  <li>iPhone 8 Plus</li>
                  <li>iPhone 8 </li>
                  <li>iPhone 13 and 14 Pro Max</li>
                  <li>iPhone 13 and 14 Pro </li>
                  <li>iPhone 13 and 14 </li>
                  <li>iPhone 13 mini</li>
                </ul>
              </div>
              <div className="col">
                <h6 className="device">Up to (JD)</h6>
                <ul className="li_order">
                  <li>350 JD</li>
                  <li>300 JD</li>
                  <li>220 JD </li>
                  <li>200 JD</li>
                  <li>110 JD</li>
                  <li>320 JD</li>
                  <li>250 JD</li>
                  <li>210 JD</li>
                  <li>190 JD</li>
                  <li>120 JD</li>
                  <li>120 JD</li>
                  <li>100 JD</li>
                  <li>100 JD</li>
                  <li>70 JD</li>
                  <li>400-450 JD</li>
                  <li>300-350 JD</li>
                  <li>280-320 JD</li>
                  <li>250 JD</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab === "link" ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <h6 className="device">Your device</h6>
                <ul className="li_order">
                  <li>iPad Pro </li>
                  <li>iPad Air </li>
                  <li>iPad mini </li>
                </ul>
              </div>
              <div className="col">
                <h6 className="device">Up to (JD)</h6>
                <ul className="li_order">
                  <li>250 JD</li>
                  <li>220 JD</li>
                  <li>150 JD </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab === "link2" ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <h6 className="device">Your device</h6>
                <ul className="li_order">
                  <li className="li_order">MacBook Pro </li>
                  <li>MacBook Air </li>
                  <li>MacBook </li>
                  <li>iMac Pro </li>
                  <li>iMac </li>
                </ul>
              </div>
              <div className="col">
                <h6 className="device">Up to (JD)</h6>
                <ul className="li_order">
                  <li>1100 JD</li>
                  <li>390 JD</li>
                  <li>250 JD </li>
                  <li>1350 JD</li>
                  <li>700 JD</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab === "link3" ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <h6 className="device">Your device</h6>
                <ul className="li_order">
                  <li className="li_order">Apple Watch Series 6 </li>
                  <li>Apple Watch SE </li>
                  <li>Apple Watch Series ultra </li>
                  <li>Apple Watch Series 7 </li>
                  <li>Apple Watch Series 8</li>
                </ul>
              </div>
              <div className="col">
                <h6 className="device">Up to (JD)</h6>
                <ul className="li_order">
                  <li>100 JD</li>
                  <li>95 JD</li>
                  <li>220 JD </li>
                  <li>100 JD</li>
                  <li>150 JD</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}{" "}
      </div>
      <div className="container_upgrade">
        <p>Trade in & Upgrade Your Apple Device.</p>
        <p>
          It has never been easier to upgrade your old device for a new one at a
          lower cost.
        </p>
        <p>
          At iSystem, you can trade-in your eligible old device and get a new
          one immediately and pay the difference. Also you can trade in your
          eligible device for credit toward your next purchase.
        </p>
        <p>Does your device qualify?</p>
        <p>
          To receive your credit for trading in your old device, you must be
          able to tick off the following:
        </p>
        <ul>
          <li>Your age is 18 years old and above.</li>
          <li>You have a valid ID.</li>
          <li>You are the owner of the Apple device.</li>
          <li>
            Your device (iPhone, Mac, Apple Watch and iPad) powers up and
            functions normally.
          </li>
          <li>Your Apple device display is in good condition.</li>
          <li>
            Your Apple device enclosure is in good condition (Free from dents).
          </li>
          <li>Your Apple device has no obvious signs of liquid damage. .</li>
          <li>
            Your Apple device keys or buttons are in good working condition.
          </li>
          <li>You have your Apple device original cable and power adapter.</li>
          <li>You signed out from iCloud.</li>
          <li>"Find My" on your Apple device is turned off.</li>
        </ul>
        <p>Frequently Asked Questions:</p>
        <ol>
          <li>Which devices are eligible for trade-in?</li>
          <p>
            Any iPhone, Mac, Apple Watch and iPad that meet the above conditions
            can qualify for trade-in.
          </p>
          <li>
            {" "}
            Can I trade-in my iPhone, Mar, Apple Watch and iPad and receive any
            discount or offer on a new device?
          </li>
          <p>
            Trade-in is available to individuals purchasing a new iPhone, Mac,
            Apple Watch and iPad instore.
          </p>
          <li>
            Will my online valuation be the same when I visit my local iSystem
            Store?
          </li>
          <p>
            Your online and in store valuations may vary, after testing the
            device.
          </p>
          <li>Can I trade in online?</li>
          <p>Trade in is only available in store.</p>
          <li> Do I have to include accessories We chargers and cables?</li>
          <p>
            In some cases, your final trade in value can vary depending on if
            you include por power adapter and other accessories or not. But you
            don't have to
          </p>
          <li>
            {" "}
            can I pay the difference between the trade in value and the new
            device on installment.
          </li>
          <p>
            Yes, if you are a customer for any of the banks iSystem works with
            on installment, you can pay the rest on installment.
          </p>
        </ol>
      </div>
    </div>
  );
}

export default TradeIn;
