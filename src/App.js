import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';

export function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}
