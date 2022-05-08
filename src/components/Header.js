import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepage from './Homepage';
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown, Nav } from 'react-bootstrap';


function Navigation( {handlePageChange} ) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Johns Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handlePageChange('Aboutme')} href="#">Home</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Portfolio')} href="#">Portfolio</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('Resume')} href="#">Resume</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/Johnpo34">Github</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/john-pohl-871437225/">LinkedIN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation