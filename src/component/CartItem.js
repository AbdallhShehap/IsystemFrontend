import React , {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assests/Carts.css";
import Image from "react-bootstrap/Image";

const CartItem = ({ item, updateQuantity,updateItemQuantity,removeItem,selectedModel }) => {
  const {  quantity, price ,color,model,product_name,color_name} = item;

  // const [quantityy, setQuantity] = useState("");


 

  const handleIncrease = () => {
    updateQuantity(item, quantity + 1);
  };

  // const handleDecrease = () => {
  //   if (quantity > 1) {
  //     updateQuantity(item, quantity - 1);
  //   }
  // };
const handleDelete=()=>{
  // const del=item.find((item)=>item.id != id)
}
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col xs={12} xl={3} md={4}>
            {" "}
            {/* <Image src={img} fluid className="mx-auto d-block" /> */}
          </Col>

          <Col xs={12} xl={3} md={4} className="item-name  product_info"><br/>{product_name}<br/>{color_name}</Col>
          <br></br>
          <br></br>

          <Col xs={12} xl={2} md={4} className="item-quantity mt-4 quantity">
            <button
              onClick= {()=>updateItemQuantity(item.id,quantity - 1)}
              className="btn btn-primary btn_remove "
              style={{
                backgroundColor: "#27579A",
                borderRadius: "20px",
                width: "30px", // Adjust the width as needed
                height: "30px", // Adjust the height as needed
                padding: "0", // Remove padding to make the button smaller
                fontSize: "16px", // Adjust the font size
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick= {()=>updateItemQuantity(item.id,quantity + 1)}
              className="btn btn-primary btn_add"
              style={{
                backgroundColor: "#27579A",
                borderRadius: "20px",
                width: "30px", // Adjust the width as needed
                height: "30px", // Adjust the height as needed
                padding: "0", // Remove padding to make the button smaller
                fontSize: "16px", // Adjust the font size
              }}
            >
              +
            </button>
          </Col>

          <Col xl={1}className="item-price mt-4 text-center"><p>JD {price} </p></Col>
          {/* or this
          <Col xl={1}className="item-price mt-4 text-center">${price.toFixed(2)}</Col> */}

          <Col xl={3}className="item-price mt-4 text-center"><img
            src={require("../images/delete.png")}
            alt=""
            onClick={()=>removeItem(item.id)}
          /> </Col>

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