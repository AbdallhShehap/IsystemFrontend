import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import "../assests/Registration.css"
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();
const handleUserNameChange = (event) => {
  setEmail(event.target.value);
};
const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
const submitUser = async () => {
  try {
    // const username = generateUsername(firstName, lastName);
    await axios.post(
      "http://localhost:9090/users/register",
      {
        username: userName,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  if (email && password && userName) {
    try {
      submitUser();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
}, [email, password,userName ]);

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
              value={userName}
              onChange={handleUserNameChange}
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon2"
              value={email}
              onChange={handleEmailChange}
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={handlePasswordChange}
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


