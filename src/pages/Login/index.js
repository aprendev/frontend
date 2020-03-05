import React, { useState, useEffect } from 'react';
import { Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { api } from '../../services/api';
import { login, isAuthenticated } from '../../services/auth';

export function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isAutorizedUser, setIsAutorizedUser] = useState(false);

  useEffect(() => {
    async function validateAuth() {
      const response = await isAuthenticated();
      setIsAutorizedUser(response);
      if (isAutorizedUser) {
        history.push('/home');
      }
    }
    validateAuth();
  }, [history, isAutorizedUser]);

  async function handleSubmit(event) {
    event.preventDefault();

    function loginError(err) {
      try {
        let errorMessage = err.response.data.message;
        errorMessage = errorMessage
          .substr(errorMessage.indexOf(': '), 1000)
          .replace(': ', '');
        setLoginError(errorMessage);
      } catch {
        setLoginError('Erro desconhecido');
      }
    }

    await api
      .post('/auth', {
        username,
        password
      })
      .then(({ data }) => {
        login(data.tokens.token, JSON.stringify(data.user));
        history.push('/home');
      })
      .catch((err) => loginError(err));
  }

  return (
    <>
      <NavBar />
      {!isAutorizedUser && (
        <Row>
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
              {loginError && (
                <>
                  <Alert variant="danger">{loginError}</Alert>
                </>
              )}
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
}
