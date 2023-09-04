import React,{useEffect,useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../assests/Login.css"
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [userFlag,setUserFlag]=useState(true)
const [emailFlag,setEmailFlag]=useState(true)
const [passwordFlag,setPasswordFlag]=useState(true)

const navigate = useNavigate();
const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};
const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  return pattern.test(email);
};

const validatePassword = (password) => {
if(!password){
  return false;
}else{
  return true;
}

};
const validateUser = async () => {
  let emailIsValid = validateEmail(email);
  let passwordIsValid = validatePassword(password);
  // console.log(email, password,);
  setUserFlag(true);

  if (emailIsValid) {
    setEmailFlag(true);
  } else {
    setEmailFlag(false);
  }

  if (passwordIsValid) {
    setPasswordFlag(true);
  } else {
    setPasswordFlag(false);
  }

};
  const submitUser = async () => {
      try{
      const response = await axios.post(
        "http://localhost:9090/users/login",
        {
          email: email,
          password: password,
        }
      );

      const result = await response.data;
      console.log(result);
      if (result.status === "error") {
        console.log(result.message);
        setUserFlag(false);
      }
      if (result.status === "success") {
        console.log(result.token);
        setUserFlag(true);

        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }

    
      }

      

 useEffect(() => {
    if (email && password) {
      submitUser();
      
    }
  }, [email,password]);

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
              value={email}
              onChange={handleEmailChange}
            />
          </InputGroup>

          <InputGroup className="mb-5">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputGroup>

          <Button variant="primary" size="lg" style={{ width: "100%", marginBottom:"5%" ,textAlign:"center"}} active onClick={validateUser}>
            Login
          </Button>
          <Link to='/registration'> Don`t hava an account ? SignUp</Link>
           </div>
        </Col>
      </Row>
    </Container>
  );
}


