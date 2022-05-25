import React from 'react'
import { Container, Nav, Navbar,  } from 'react-bootstrap';



const NavBar = () => {
  return (
    <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar