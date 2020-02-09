import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { isAuthenticated, logout } from '../../services/auth';
import { CustomNavbar } from './styles';

export function NavBar() {
  const [isAutorizedUser, setIsAutorizedUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function validateAuth() {
      const response = await isAuthenticated();
      setIsAutorizedUser(response);
    }
    validateAuth();
  });

  const linkStyle = { color: '#fff', padding: 15 };

  return (
    <CustomNavbar variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand>Aprendev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={linkStyle} to="/home">
              Home
            </Link>
            <Link style={linkStyle} to="/challenges">
              Desafios
            </Link>
            <Link style={linkStyle} to="/memberlist">
              Lista de membros
            </Link>
          </Nav>
          {isAutorizedUser && (
            <Nav className="ml-auto">
              <Link
                style={linkStyle}
                onClick={() => {
                  logout();
                  history.push('/');
                }}
              >
                Sair
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}
