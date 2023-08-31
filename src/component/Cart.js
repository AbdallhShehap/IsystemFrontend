import React from 'react'
import CardSlider from './CardSlider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import CartItem from './CartItem';


function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 1, price: 10.99 },
    { id: 2, name: 'Product 2', quantity: 2, price: 24.99 },
    // Add more items as needed
  ]);

  const updateQuantity = (itemToUpdate, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemToUpdate.id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <>
      <Container fluid="md">
        <Col style={{ marginTop: "20px" }}>
          <h3> Cart</h3>
        </Col>

        <Row>
          <Col xs={12} md={9} lg={9}>
            <Container fluid="md">
              <Row>
                <Col>Item</Col>

                <Col>QTY </Col>

                <Col>Price</Col>
              </Row>

              <hr></hr>
            </Container>
          </Col>

          <Col xs={12} md={12} lg={3}>
            <h2>Cart Summary</h2>
            <span>Prices: ${cartTotal} </span>
            <div className="cart-total">Tax: ${cartTotal * 0.16}</div>
            <div className="cart-total">
              Total: ${cartTotal + cartTotal * 0.16}
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
              <button type="submit" className="btn btn-primary ">
                Apply
              </button>
            </div>
              <br></br>
            <button type="submit" class="btn btn-primary  btn-block mb-3">Proceed to checkout</button> 
          
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={9} lg={9}>
            <Container fluid="md">
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

              
            </Container>
          </Col>
        </Row>
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


