import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../assests/Registration.css"


export default function Registration() {
  return (
    <Container fluid>
      <Row>
      <Col className='imgLogin'style={{marginTop:"6%"}} >
      
        <img src={require("../images/Mask_Group_2.png")}  alt="Your Image" fluid width={"100%"}height={"90%"} />

        </Col>

        <Col
        className='inputRegistration'
          style={{
            width: "30%",
            border: "1px solid ",
            borderRadius: "25px",
            margin: "5%",
            // padding: "2%",
            // paddingTop:"7rem"

          }}
        >
          <h1 style={{textAlign:"center"}}> Sign Up</h1>
          <InputGroup className="mb-4 mt-5">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="current password"
              aria-label="current password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button variant="primary" size="lg" style={{ width: "100%" }} active>
            Registration
          </Button>
        </Col>
      </Row>
    </Container>
  );
}


