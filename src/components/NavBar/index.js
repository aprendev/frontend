import { Link } from '@reach/router';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CustomNavbar } from './styles';

export function NavBar() {
  return (
    <CustomNavbar variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">Aprendev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/" style={{ color: '#fff' }} as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/goal-maker" style={{ color: '#fff' }} as={Link}>
              Contar meta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
