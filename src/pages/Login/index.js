import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { login } from '../../services/auth';

export function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await api.post('/auth', {
      username,
      password
    });
    login(data.token);
    history.push('/home');
  }

  return (
    <>
      <Row>
        <Col />
        <Col bsPrefix="col d-flex justify-content-center">
          {/* Form down here */}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Usuário:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col />
      </Row>
    </>
  );
}
