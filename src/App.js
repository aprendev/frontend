import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { NavBar } from './components/NavBar';

export function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}
