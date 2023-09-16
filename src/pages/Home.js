import React,{useState} from "react";
import "../assests/Home.css";
import dollar from "../images/dollar.png";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import location_icon from "../images/location_icon.png";
import appleCare_icon from "../images/appleCare_icon.png";
import iSystemCare from "../images/iSystemCare.png";
import backgroundIphone from "../images/backgroundIphone.png";
import iPhone14Backgroundedit from "../images/iPhone14Backgroundedit.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CardSlider from "../component/CardSlider.js";
import CardCategories from "../component/CardCategories";
import TopSellingCard from "../component/TopSellingCard.js"
import { Link } from "react-router-dom";
import CardsData from "../Data/CardsData";
function Home() {
  const [cardsData, setCardsData] = useState(CardsData);
// console.log(`home`,{cardsData})
  return (
    <div className="cont">
        <Carousel
          autoPlay
          interval="5000"
          transitionTime="2000"
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="sliderHome "
        >
       
 <div>
            <img src={require('../images/1q.jpeg')} alt="" height={"100%"} />
          </div>
               {/* 1 */}
          <div>
            <img src={require('../images/2q.jpeg')} alt="" height={"100%"} />
          </div>
          <div>
            <img src={require('../images/3q.jpeg')} alt="" height={"100%"} />
          </div>

          <div>
            <img src={require('../images/4q.jpeg')} alt="" height={"100%"} />
          </div>

          <div>
            <img src={require('../images/Trade-In MP.jpg')} alt="" height={"100%"} />
          </div>

          <div>
            <img src={require('../images/Switchers MP.jpg')} alt="" height={"100%"}/>
          </div>
        
         
          <div>
            <img src={require('../images/Do more on iPad MP.jpg')} alt="" height={"100%"} />
          </div>
          <div>
            <img src={require('../images/Why Apple Watch MP.jpg')} alt="" height={"100%"} />
          </div>
          <div>
            <img src={require('../images/Mac does that MP.jpg')} alt="" height={"100%"}/>
          </div>
        </Carousel>

        <div className="container-fluid text-center">
          <div className="row">
            <div className="col col_top_categories">
              <Link to={'installmentplan'} style={{textDecoration:"none"}}>
              <div className="card mx-auto card_topCategories installment">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <Image src={dollar} fluid width={"18px"} />
                  </div>
                  <h2 className="card-title card_title_topCategories">
                    Installment Plan{" "}
                  </h2>
                </div>
              </div>
              </Link>
            </div>
            <div className="col col_top_categories">
              <Link to={"contactus"} style={{textDecoration:"none"}}>
              <div className="card mx-auto card_topCategories our_location">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <Image src={location_icon} fluid width={"25px"} />
                  </div>
                  <h5 className="card-title card_title_topCategories">
                    Our Location{" "}
                  </h5>
                  {/* <p className="card-text desc_of_topCategories">
                  Schedule and reserve className room of student attendance.
                </p> */}
                </div>
              </div>
              </Link>
            </div>
            <div className="col col_top_categories">
              <div className="card mx-auto card_topCategories apple_care">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <Image src={appleCare_icon} fluid width={"35px"} />
                  </div>
                  <h5 className="card-title card_title_topCategories">
                    iSystem Care{" "}
                  </h5>
                  {/* <p className="card-text desc_of_topCategories">
                  Automate and track emails to individuals or g organization and
                  track emails .
                </p> */}
                </div>
              </div>
            </div>
            <div className="col col_top_categories">
              <Link to={"tradein"}style={{textDecoration:"none"}}>
              <div className="card mx-auto card_topCategories tradein">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <Image src={iSystemCare} fluid width={"25px"} />
                  </div>
                  <h5 className="card-title card_title_topCategories">
                    Trade In{" "}
                  </h5>
               
                </div>
              </div>
              </Link>

            </div>
          </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <CardSlider title="Special Offers" cardsData={cardsData}/>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <CardCategories />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TopSellingCard
       title="Top Selling Accessories" 

      />
    </div>
  );
}

export default Home;
