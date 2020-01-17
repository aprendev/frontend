import React from 'react';
import { Container } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
import { Home } from './components/pages/Home';

export function App() {
  return (
    <Container>
      <NavBar />
      <Home />
    </Container>
  );
}
