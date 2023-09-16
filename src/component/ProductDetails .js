import React, { useEffect, useState } from "react";
import "../assests/ProductDetails.css";
import Image from "react-bootstrap/Image";
import CardSlider from "./CardSlider";
import { Link, useParams } from "react-router-dom";
import CardsData from "../Data/CardsData";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
function ProductDetails() {
  const { id } = useParams();
  const {addItem}=useCart()
  const navigate=useNavigate()
  let [selectData, setSelectData] = useState([]);
  const [cart,setCart]=useState([])
  const [selectedColor, setSelectedColor] = useState(""); // Initialize state for selected color
const [selectedModel,setSelectedModel]=useState("")
const [chosenProduct,setChosenProduct]=useState([])

  selectData = CardsData.find((select) => select.id == id);
  // console.log(selectData);
  useEffect(() => {
    window.scrollTo(0, 0);
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
  // const handleCart = (product) => {
  //   // Create a copy of the current cart
  //   const updatedCart = [...cart];
  
  //   // Check if the product is already in the cart based on some identifier (e.g., product id)
  //   const existingProduct = updatedCart.find((item) => item.id === product.id);
  
  //   if (existingProduct) {
  //     // If the product is already in the cart, update its quantity
  //     existingProduct.quantity += 1;
  //   } else {
  //     // If the product is not in the cart, add it
  //     updatedCart.push({ ...product, quantity: 1 });
  //   }
  
  //   // Update the cart state with the new cart
  //   setCart(updatedCart);
  // };
  
  // console.log(cart); // This will show the updated cart after adding items

  const handleColorClick = (color) => {
    setSelectedColor(color); // Update the selected color in the state
    setChosenProduct((prevChosenProduct) => [...prevChosenProduct, color]);
      // setContainerBoxClassName("selected"); // Apply the 'selected' class to the container

  };
  const handleModel = (model) => {
    setSelectedModel(model); // Update the selected color in the state
setChosenProduct((prevChosenProduct)=>[...prevChosenProduct,model])


  };
console.log(selectedColor)
console.log(selectedModel)
console.log(chosenProduct)


// const handleAddToCart = (selectedProduct) => {
//   // Pass the selected product to the Cart component
//   setCart((prevCart) => [...prevCart, selectedProduct]);
// };
  return (
    <div>
      <div className="container" style={{marginTop:"5%"}}>
        <div className="row">
          <div className="col-lg-7 mt-5 " >
       
            <div id="content-wrapper">
              <div class="column mb-5">
                <div className="d-flex justify-content-center">
                  <img id="featured" src={selectData.image} alt="" />
                </div>

                <div id="slide-wrapper">
                  <button
                    id="slideLeft"
                    className="btn btn-primary mb-3 arrow_slider "
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-arrow-left "></i>
                  </button>
                  <div id="slider">
                    <img
                      className="thumbnail active"
                      src={selectData.sliderImg[0]}
                    />
                    <img
                      className="thumbnail"
                      src={selectData.sliderImg[1]}
                    />
                    <img
                      className="thumbnail"
                      src={selectData.sliderImg[2]}
                    />

                    <img
                      className="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                    <img
                      class="thumbnail"
                      src={require("../images/iPhone_14_Pro_Silver_Pure_Back_iPhone_14_Pro_Silver.png")}
                    />
                  </div>
                  <button
                    id="slideRight"
                    className="btn btn-primary mb-3 arrow_slider "
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-arrow-right "></i>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 product_details">
            {" "}
            <h4>{selectData.title}</h4>{" "}
            <p className="price">{selectData.price}</p>
            <h5 className="">Color</h5>
            {/* <div className="container_box">
              <img src={selectData.colorImg[0]} alt="" className="color" />
              <img src={selectData.colorImg[1]} alt="" className="color" />
          
            </div>
            <div className="container_box">
             {selectData.color.map((colorOption, index) => (
          <p
            key={index}
            className={`color ${selectedColor === colorOption ? "selected" : ""}`}
            onClick={() => handleColorClick(colorOption)}
          >
            {colorOption}
          </p>
        ))}
            </div> */}
        <div className="container_box">
  {selectData.color.map((colorOption, index) => (
    <div key={index} className={`color-option ${selectedColor === colorOption ? "selected" : ""}`} onClick={() => handleColorClick(colorOption)}>
      <img src={selectData.colorImg[index]} alt="" className="color" />
      <p>{colorOption}</p>
    </div>
  ))}
</div>


            <h5 className="">Model</h5>
            <div className="container_box">
            {selectData.model.map((modelOption, index) => (
          <p
            key={index}
            className={`model_space ${selectedModel === modelOption ? "selected" : ""}`}
            onClick={() => handleModel(modelOption)}
          >
            {modelOption}
          </p>
        ))}
              {/* <p className="model_space">{selectData.model[0]}</p>
              <p className="model_space">{selectData.model[1]}</p>
              <p className="model_space">{selectData.model[2]}</p>
              <p className="model_space">{selectData.model[3]}</p> */}
            </div>
            <Link to={'/cart'}>
            <button
              className="btn btn-primary w-100 btn_details_cart mb-1 "
              type="submit"
              onClick={()=>{
                addItem(selectData)
              
              }}
              >
              Add to Cart{" "}
            </button>
            
            </Link>
            <Link to={'/tradein'}>
            <button
              className="btn btn-primary w-100 btn_details_trade mb-1"
              type="submit"
            >
              Trade In
            </button>
            </Link>
<Link to={'/installmentplan'}>
            <button
              className="btn btn-primary w-100 btn_details_trade mb-1"
              type="submit"
            >
              Installment
            </button>
            </Link>

          </div>
        </div>
      </div>
      <div className="">
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
      </div>
      <div className="row">
        <div className="col">
          <CardSlider />
        </div>
      </div>
      {/* <Cart chosenProduct={chosenProduct}   itemName={selectData.name}/> */}
      {/* <Cart
  chosenProduct={chosenProduct}
  itemId={selectData.id}
  itemName={selectData.title}    // Pass the item name
  itemColor={selectedColor}    // Pass the selected color
  itemModel={selectedModel}    // Pass the selected model
/> */}
    </div>
  );
}

export default ProductDetails;
