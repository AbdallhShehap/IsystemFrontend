import React,{useEffect} from "react";
import "../assests/ProductDetails.css";
import Image from "react-bootstrap/Image";
import CardSlider from "./CardSlider";

function ProductDetails() {
 useEffect(() => {
   const thumbnails = document.getElementsByClassName("thumbnail");
   const activeImages = document.getElementsByClassName("active");
   const slider = document.getElementById("slider");

   for (let i = 0; i < thumbnails.length; i++) {
     thumbnails[i].addEventListener("click", function () {
       if (activeImages.length > 0) {
         activeImages[0].classList.remove("active");
       }
   
       this.classList.add("active");
       document.getElementById("featured").src = this.src;
     });
   }
   

   const buttonRight = document.getElementById("slideRight");
   const buttonLeft = document.getElementById("slideLeft");

   buttonLeft.addEventListener("click", function () {
     slider.scrollLeft -= 180;
   });

   buttonRight.addEventListener("click", function () {
     slider.scrollLeft += 180;
   });

   // Clean up event listeners when component unmounts
   return () => {
     for (let i = 0; i < thumbnails.length; i++) {
       thumbnails[i].removeEventListener("mouseover", function () {
         if (activeImages.length > 0) {
           activeImages[0].classList.remove("active");
         }
       });
     }

     buttonLeft.removeEventListener("click", function () {
       slider.scrollLeft -= 180;
     });

     buttonRight.removeEventListener("click", function () {
       slider.scrollLeft += 180;
     });
   };
 }, []);
  return (
    <div>
  <div className="container ">
        <div className="row">
          <div className="col mt-5">
          <div id="content-wrapper">
       

           <img id="featured" src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>

           <div id="slide-wrapper" >
       <a
               className="btn btn-primary mb-3 arrow_slider "
               id="slideLeft"
               href="#carouselExampleIndicators2"
               role="button"
               data-slide="next"
             >
               <i className="fa fa-arrow-left"></i>
             </a>
               <div id="slider">
       <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
                   <img className="thumbnail active" src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
         <img  className="thumbnail"  src={require('../images/iphone_14_last.png')}/>
         <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>

         <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
         <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
         <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
         <img  className="thumbnail"  src={require('../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png')}/>
               </div>

               {/* <img id="slideRight" class="arrow" src="images/arrow-right.png"/> */}
       <a
               className="btn btn-primary mb-3 arrow_slider "
               id="slideRight"
               href="#carouselExampleIndicators2"
               role="button"
               data-slide="next"

             >
               <i className="fa fa-arrow-right"></i>
             </a>
           </div>


   </div>
          </div>
         
          <div className="col mt-5">
            {" "}
            <h4>iPhone 14 Pro Max</h4> <p className="price">JD900</p>
            <p className="">Color</p>
            <div className="container_box">
            <div className="color Deep_Purple"></div>
            <div className="color Silver"></div>
            <div className="color Space_Black"></div>
            <div className="color Gold"></div>
            </div>
            <div className="container_box">
          <p>Deep Purple</p>
          <p>Silver</p>
          <p>Space Black</p>
          <p>Gold</p>

            </div>
            <p className="">Model</p>

            <div className="container_box">
              <p>128 GB</p>
              <p>256 GB</p>
              <p>512 GB</p>
              <p>1 TB</p>

            </div>
            <button className="btn btn-primary w-100 btn_details_cart mb-1 " type="submit">Add to Cart   </button>
            <button className="btn btn-primary w-100 btn_details_trade mb-1" type="submit">Trade In</button>
            <button className="btn btn-primary w-100 btn_details_trade mb-1" type="submit">Installment</button>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image src={require("../images/BigProductDetails.png")} fluid />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image src={require("../images/productDetailsWhite.png")} fluid />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CardSlider />
          </div>
        </div>
      </div>
  
    </div>
    
  )
}

export default ProductDetails