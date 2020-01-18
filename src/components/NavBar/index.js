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
            <Nav.Link>
              <Link style={{ color: '#fff' }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: '#fff' }} to="/challenges">
                Challenges
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: '#fff' }} to="/memberlist">
                Memberlist
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
