import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { NavBar } from '../../components/NavBar';

export function Admin() {
  return (
    <>
      <NavBar />
      <ListGroup horizontal>
        <ListGroup.Item>
          <Button variant="primary">Criar novo usuário</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="primary">Setar rank</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
