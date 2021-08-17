import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import React from 'react'

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >React Northwind</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item >Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Item >Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavigationBar;
