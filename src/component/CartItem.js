import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CartItem = ({ item, updateQuantity }) => {
  const { name, quantity, price } = item;

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item, newQuantity);
  };

  return (
    <>

      <Container fluid="md">
        <Row>
          <Col className="item-name">{name}</Col>

          <Col className="item-quantity">
            <button onClick={() => handleQuantityChange(quantity - 1)}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(quantity + 1)}>
              +
            </button>
          </Col>

          <Col className="item-price">${price.toFixed(2)}</Col>
        </Row>
      </Container>
    </>
  );
};

export default CartItem;


// <Container fluid="md">
// <Row>
//   <Col></Col>
//   <Col>1 of 1</Col>
//   <Col>1 of 1</Col>
// </Row>
// </Container>