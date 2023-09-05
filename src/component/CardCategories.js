import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function CardCategories() {
  return (
    <div>
         <br></br>
         <br></br>
        <Container >
      <Row>
        <Col xs={12} >
         <Link to="">
            <img src={require("../images/image.png")} width="100%" />

         </Link>
        </Col>
      </Row>
        <br></br>
      <Row>
        <Col xs={12} md={12} lg={7} className='mb-1'>
        <Link to="" >
        <img src={require("../images/image.png")} width="90%" height="100%" />
        </Link>
        </Col>

        <Col xs={12} md={12} lg={5} >
        <Link to="">
        <img md={{ span: 4}} src={require("../images/image.png")} width="100%" height="100%"/>
        </Link>
        </Col>

      </Row>

      <br></br>
      <Row>


      <Col xs={12} md={12} lg={5} className='mb-1'>
      <Link to="">
        <img src={require("../images/image.png")} width="85%" height="100%" />
       </Link>
       </Col>


      <Col xs={12} md={12} lg={7} >
      <Link to="">
        <img src={require("../images/image.png")} width="100%" height="100%"/>
       </Link>
        </Col>


      </Row>
      <br></br>

      <Row>
      <Col xs={12} md={12} lg={6}  className='mb-1'>
      <Link to="">
        <img  src={require("../images/image.png")} className='mr-5' width="87%" height="100%" />
        </Link>
        </Col>

        <Col xs={12} md={12} lg={6}  >
        <Link to="">
        <img src={require("../images/image.png")} className='' width="100%" />
        </Link>
        </Col>



      </Row>

    </Container>
    </div>
  )
}