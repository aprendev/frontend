import React from 'react';
import { Card } from 'react-bootstrap';

export function ChallengeCard(props) {
  const { name, description, level } = props;
  return (
    <>
      <Card
        style={{
          marginBottom: '5px',
          marginLeft: '5px',
          backgroundColor: '#3269A8',
          color: '#fff'
        }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body
          style={{
            backgroundColor: '#fff',
            color: '#000'
          }}
        >
          <span>{description}</span>
        </Card.Body>
        <Card.Footer
          style={{
            backgroundColor: '#fff',
            color: '#000'
          }}
        >
          <span>{level}</span>
        </Card.Footer>
      </Card>
    </>
  );
}
