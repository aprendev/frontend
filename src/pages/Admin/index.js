import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export function Admin() {
  return (
    <>
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
