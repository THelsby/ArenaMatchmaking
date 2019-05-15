import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">The Arena</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/tournaments">Tournaments</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      ;
    </div>
  );
};

export default NavBar;
