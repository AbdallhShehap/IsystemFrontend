// import React,{useState,useEffect} from 'react'
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';
// import "../assests/Registration.css"
// import { useNavigate } from 'react-router-dom';

// export default function Registration() {
  
// const [username, setUserName] = useState("");
// const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
// const [userFlag,setUserFlag]=useState(true)
// const [emailFlag,setEmailFlag]=useState(true)
// const [passwordFlag,setPasswordFlag]=useState(true)


// const navigate = useNavigate();


// const validateEmail = (email) => {
//   const pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

//   return pattern.test(email);
// };

// const validatePassword = (password) => {
// if(!password){
//   return false;
// }else{
//   return true;
// }

// };
// const validateUser = async () => {
//   let emailIsValid = validateEmail(email);
//   let passwordIsValid = validatePassword(password);
//   // console.log(email, password,);
//   setUserFlag(true);

//   if (emailIsValid) {
//     setEmailFlag(true);
//   } else {
//     setEmailFlag(false);
//   }

//   if (passwordIsValid) {
//     setPasswordFlag(true);
//   } else {
//     setPasswordFlag(false);
//   }


// };



// const handleUserNameChange = (event) => {
//   setUserName(event.target.value);
// };
// const handleEmailChange = (event) => {
//   setEmail(event.target.value);
// };
// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };


// const submitUser = async () => {
//   try {
//     // const username = generateUsername(firstName, lastName);
//     const response =  await axios.post(
//       "http://localhost:9090/signup",
//       {
//         username: username,
//         email: email,
//         password: password,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const result = await response.data;
//     console.log(result);
//     if (result.status === "error") {
//       console.log(result.message);
//       setUserFlag(false);
//     }
//     if (result.status === "success") {
//       console.log(result.token);
//       setUserFlag(true);

//       navigate("/compare");
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// useEffect(() => {
//   if (email && password && username) {
//     submitUser();
    
 
//   }
// }, [email,username ,password]);

//   return (
//     <Container fluid>
//       <Row>
//       <Col className='imgLogin'style={{marginTop:"6%"}} >
      
//         <img src={require("../images/Mask_Group_2.png")}  alt="Your Image" fluid width={"100%"}height={"90%"} />

//         </Col>

//         <Col
//         className='inputRegistration'
//           style={{
//             width: "30%",
//             border: "1px solid ",
//             borderRadius: "25px",
//             margin: "5%",
//             // padding: "2%",
//             // paddingTop:"7rem"

//           }}
//         >
//           <h1 style={{textAlign:"center"}}> Sign Up</h1>
//           <InputGroup className="mb-4 mt-5">
//             <Form.Control
//               placeholder="Username"
//               aria-label="Username"
//               aria-describedby="basic-addon1"
//               value={username}
//               onChange={handleUserNameChange}
//             />
//           </InputGroup>

//           <InputGroup className="mb-4">
//             <Form.Control
//               placeholder="email"
//               aria-label="email"
//               aria-describedby="basic-addon2"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </InputGroup>

//           <InputGroup className="mb-4">
//             <Form.Control
//               placeholder="Password"
//               aria-label="Password"
//               aria-describedby="basic-addon1"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </InputGroup>

//           <Button variant="primary" size="lg" style={{ width: "100%" }} active onClick={validateUser}>
//             Registration
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


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
import { useUserContext } from '../component/UserContext.js'

export default function Registration() {
  const { setUserData } = useUserContext();
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [userFlag,setUserFlag]=useState(true)
const [emailFlag,setEmailFlag]=useState(true)
const [passwordFlag,setPasswordFlag]=useState(true)

const navigate = useNavigate();

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
  // console.log("validateUser called");
  // console.log("Email:", email);
  // console.log("Password:", password);

  
  let emailIsValid = validateEmail(email);
  let passwordIsValid = validatePassword(password);
  // console.log(email, password,);
  setUserFlag(true);

  if (emailIsValid && passwordIsValid) {
    setEmailFlag(true);
    setPasswordFlag(true);
    submitUser();

    
  } else {
    setEmailFlag(false);
    setPasswordFlag(false);

  }

  // if (passwordIsValid) {
  //   setPasswordFlag(true);
  // } else {
  //   setPasswordFlag(false);
  // }


};


const handleUserNameChange = (event) => {
  setUserName(event.target.value);
};
const handleEmailChange = (event) => {
  setEmail(event.target.value);
};
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};



const submitUser = async () => {
  // console.log("Button Clicked");
  try {
    // const username = generateUsername(firstName, lastName);
    const response =   await axios.post(
      "http://localhost:1010/signup",
      {
        username: username,
        email: email,
        password: password,
        role_id: 2
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.data;
        console.log("resu",result.status);
        if (result.status === "error") {
          console.log(result.message);

          setUserFlag(false);
        }
        if (result.status === "success") {
          console.log(result.token);
          setUserData({ username, email });
          setUserFlag(true);

    // console.log("hello")
          navigate("/profile");
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    // useEffect(() => {
    //   // console.log("useEffect called with email:", email);
    //   // console.log("useEffect called with username:", username);
    //   if (email && username) {
    //     try {
    //       submitUser();
          
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    // }, [email, username]);
    

  return (
    <Container fluid>
      <Row className="mt-5">
        <Col className="imgLogin" style={{ marginTop: "6%" }}>
          <img
            src={require("../images/Mask_Group_2.png")}
            alt="Your Image"
            fluid
            width={"100%"}
            height={"90%"}
          />
        </Col>

        <Col
          className="inputRegistration"
          style={{
            width: "30%",
            border: "1px solid ",
            borderRadius: "25px",
            margin: "5%",
            // padding: "2%",
            // paddingTop:"7rem"
          }}
        >
          <h1 style={{ textAlign: "center" }}> Sign Up</h1>
          <InputGroup className="mb-4 mt-5">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={username}
              onChange={handleUserNameChange}
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Email"
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
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </InputGroup>
          <Button
            variant="primary"
            size="lg"
            style={{ width: "100%" }}
            active
            onClick={validateUser}
          >
            Registration
          </Button>
        </Col>
      </Row>
    </Container>
  );
}