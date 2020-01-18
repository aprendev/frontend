import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CustomNavbar } from './styles';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <CustomNavbar variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">Aprendev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={{ color: '#fff', padding: 15 }} to="/">
              Home
            </Link>
            <Link style={{ color: '#fff', padding: 15 }} to="/challenges">
              Challenges
            </Link>
            <Link style={{ color: '#fff', padding: 15 }} to="/memberlist">
              Memberlist
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
