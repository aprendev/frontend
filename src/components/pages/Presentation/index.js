import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Typing from 'react-typing-animation';

export function Presentation() {
  return (
    <>
      <Row>
        <Col />
        <Col>
          <Typing>
            Seja bem vindo ao <b>Aprendev</b>!
          </Typing>
        </Col>
        <Col />
      </Row>
    </>
  );
}
