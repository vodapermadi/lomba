import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <div style={{ fontFamily: "Roboto,sans-serif" , boxShadow : "2px 5px, white" }} >
        <Navbar expand="lg" className="fixed-top shadow bgNavbar" >
          <Container>
            <Navbar.Brand href="#home" className="text-white fs-2 fw-bold">
              NameTeam
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className="text-white fw-bold fs-4">Home</Nav.Link>
                <Nav.Link href="#about" className="text-white fw-bold fs-4">About</Nav.Link>
                <Nav.Link href="#voda" className="text-white fw-bold fs-4">Voda</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
