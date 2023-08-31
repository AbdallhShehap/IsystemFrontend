import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import "../assests/Login.css"


export default function Login() {
  return (
    <Container fluid>
      <Row>
        <Col className='imgLogin'style={{marginTop:"8%"}} >
      
        <img src={require("../images/Mask_Group_2.png")}  alt="Your Image" fluid width={"100%"} />

        </Col>

        <Col
        className='inputLogin'
          style={{
            width: "30%",
            height:"35rem"
            ,
            border: "1px solid ",
            borderRadius: "25px",
            margin: "5%",
          
          }}
        >
           <h1 style={{textAlign:"center" , marginTop:"10%"}}> Sign In</h1>
           <div style={{  padding: "4%" , paddingTop:"1rem"}}>

          <InputGroup className="mb-5 mt-5">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-5">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button variant="primary" size="lg" style={{ width: "100%", marginBottom:"5%" ,textAlign:"center"}} active>
            Login
          </Button>
          <Link to='/registration'> Don`t hava an account ? SignUp</Link>
           </div>
        </Col>
      </Row>
    </Container>
  );
}


