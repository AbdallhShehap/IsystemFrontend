import React from "react";
import CardSlider from "./CardSlider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, img:require('../images/iphone_14_pro_max_silver_pdp_image_position-1b_en_1.png'),color:"white",model:"256 GB",name: "Product 2", quantity: 2, price: 24.99 },
    { id: 2,img:require('../images/iphone_14_pro_max_silver_pdp_image_position-2_en_1.png'),color:"black",model:"128 GB", name: "Product 1", quantity: 1, price: 10.99 },
    { id: 3, img:require('../images/iphone_14_pro_max_silver_pdp_image_position-1b_en_1.png'),color:"white",model:"256 GB",name: "Product 2", quantity: 2, price: 24.99 },
    // Add more items as needed
  ]);

  const updateQuantity = (itemToUpdate, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemToUpdate.id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Container fluid="md">
        <Col  style={{ marginTop: "20px" }}>
          <h3> Cart</h3>
        </Col>
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12">
            <Row className="cart_title">
              <Col  style={{marginLeft:"40px",textAlign:"center"}}>Item</Col>

              <Col style={{marginLeft:"60px",textAlign:"center"}}>QTY </Col>

              <Col style={{textAlign:"center"}}>Price</Col>
            </Row>
            <hr/>
            <Row>
              <div className="cart">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </div>
            </Row>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 mt-4">
            <h2>Cart Summary</h2>
            <span>Prices: ${(cartTotal).toFixed(2)} </span>
            <div className="cart-total">Tax: ${(cartTotal * 0.16).toFixed(2)}</div>
            <div className="cart-total">
              Total: $ {(cartTotal + cartTotal * 0.16).toFixed(2)}
            </div>
            <hr></hr>
            <p>
              {" "}
              <b> Do you have a discount coupon?</b>
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Coupon code"
              />
              <button type="submit" className="btn btn-primary " style={{backgroundColor:"#27579A"}}>
                Apply
              </button>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary  btn-block mb-3" style={{backgroundColor:"#27579A"}}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CardSlider title={"You might also like:"} />
    </>
  );
}

export default Cart;

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Product 1', quantity: 1, price: 10.99 },
//     { id: 2, name: 'Product 2', quantity: 2, price: 24.99 },
//     // Add more items as needed
//   ]);

//   const updateQuantity = (itemToUpdate, newQuantity) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === itemToUpdate.id ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCartItems);
//   };

//   const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
//       ))}
//       <div className="cart-total">Total: ${cartTotal.toFixed(2)}</div>
//     </div>
//   );
// };

// export default Cart;
