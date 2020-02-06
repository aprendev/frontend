import React, { useState } from 'react';
import { Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { login } from '../../services/auth';

export function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // useEffect(() => {
  //   if (props.location.state.error) {
  //     return <h1>You are not logged</h1>;
  //   }
  // }, [props.location.state]);

  async function handleSubmit(event) {
    event.preventDefault();
    await api
      .post('/auth', {
        username,
        password
      })
      .then(({ data }) => {
        login(data.tokens.token);
        history.push('/home');
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        const error = errorMessage
          .substr(errorMessage.indexOf(': '), 1000)
          .replace(': ', '');
        console.log(error);
        setLoginError(error);
      });
  }

  return (
    <>
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
    </>
  );
}
