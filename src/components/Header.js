import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import Navbar from "react-bootstrap/Navbar";
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


function Nav() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Johns Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/Johnpo34">Github</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/john-pohl-871437225/">LinkedIN</NavDropdown.Item>
                <NavDropdown.Item href="https://twitter.com/johnpo34">Twitter</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar