import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import { Link ,useLocation } from 'react-router-dom';
import {BiUserCircle} from "react-icons/fa";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};
const customButtonStyles = {
  textTransform: 'none', // Reset text-transform to default
};

export default function EnhancedModal({ onClose }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  const isRegistrationPage = location.pathname === "/registration" ;
  

  return (
    <div >
      <Button  onClick={handleOpen} style={customButtonStyles}>
      <LinkContainer to="" style={{fontSize:"12px" }} >
                  <Nav.Link>
                  <i class="fa-solid fa-circle-user fa-sm" style={{Color: "#fff"}}></i>              Login
                  </Nav.Link>
                </LinkContainer>
      </Button>
      <Modal
        open={open}
        onClose={() => {
            handleClose();
            onClose(); 
          }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Login
          </Typography>
          <form style={formStyle} action="#">
            <input
              type="text"
              placeholder="Email address"
              required
              style={{ padding: '10px', borderRadius: '5px' }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={{ padding: '10px', borderRadius: '5px' }}
            />
            <p>

              <a href="#">Forgot password?</a>
            </p>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <Link to="/registration"  onClick={handleClose} >
            <Button type="submit" variant="outlined" color="primary" >
              Create an accuont
            </Button>

            </Link>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
