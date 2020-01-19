import React from 'react';
import { Card, Button } from 'react-bootstrap';

export function ChallengeCard(props) {
  const { name, description, level } = props;

  // styles
  const cardStyle = {
    marginBottom: '5px',
    marginLeft: '5px',
    backgroundColor: '#3269A8',
    color: '#fff'
  };
  const cardBodyStyle = {
    backgroundColor: '#fff',
    color: '#000'
  };
  const cardFooterStyle = {
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <>
      <Card style={cardStyle}>
        <Card.Header>{name}</Card.Header>
        <Card.Body style={cardBodyStyle}>
          <span>{description}</span>
        </Card.Body>
        <Card.Footer style={cardFooterStyle}>
          <span>{level}</span>
          <Button variant="light">
            <a href="https://forms.gle/X34tjMfEjnWEaawGA">Enviar atividade</a>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
