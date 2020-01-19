import axios from 'axios';
import MaterialIcon from 'material-icons-react';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { OnLeaveModal } from './OnLeaveModal';

export function MemberCard(props) {
  const {
    name,
    level,
    licenca,
    periodoLicenca,
    githubUsername,
    warning,
    turno,
    atividadesEntreges
  } = props;

  // State
  const [avatarUrl, setAvatarUrl] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getGithubAvatar() {
      const { data } = await axios.get(
        `https://api.github.com/users/${githubUsername}`
      );
      setAvatarUrl(data.avatar_url);
    }
    getGithubAvatar();
  });

  // Handlers
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Styling
  const cardStyle = { margin: '10px' };
  const cardBackground = warning === 'true' ? '#ffcc00' : '#fff';
  const cardBodyStyle = { display: 'flex', justifyContent: 'space-between' };
  const avatarStyle = { border: '1px solid #000', width: 30 };
  const cardNameStyle = { padding: 15 };
  const onLeaveButtonStyle = { backgroundColor: '#fff', border: 'none' };

  return (
    <>
      <Card style={cardStyle}>
        <Card.Header style={{ backgroundColor: cardBackground }}>
          <Row>
            <Col>
              <img style={avatarStyle} src={avatarUrl} alt="" />
              <b style={cardNameStyle}>{name}</b>
            </Col>
            <Col bsPrefix="ml-auto">
              {atividadesEntreges && (
                <MaterialIcon
                  title="Meta concluída"
                  color="#179621"
                  size={25}
                  icon="done"
                />
              )}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body style={cardBodyStyle}>
          <span>
            <b>Level:</b> {level}
            <br />
            <b>Turno:</b> {turno}
          </span>
          {licenca === 'true' && (
            <Button
              style={onLeaveButtonStyle}
              onClick={() => handleShowModal()}
            >
              <MaterialIcon size={16} icon="timer" />
            </Button>
          )}
        </Card.Body>
      </Card>
      <OnLeaveModal
        show={showModal}
        periodoLicenca={periodoLicenca}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
