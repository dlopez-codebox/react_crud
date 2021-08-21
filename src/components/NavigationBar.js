import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React, { useContext } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React Northwind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>
              <Link to={"/products"}>Products</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Link to='/cart'>
        <Button variant="success" type="button">
          <AiOutlineShoppingCart /> {cartCount==0?"Vacio":cartCount + " items "}
        </Button>
      </Link>
    </Navbar>
  );
};

export default NavigationBar;
