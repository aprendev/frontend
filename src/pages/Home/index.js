import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ChallengeCard } from '../../components/ChallengeCard';
import { NavBar } from '../../components/NavBar';
import { useTabletop } from '../../hooks/useTableTop';

const key = process.env.REACT_APP_CHALLENGES_SHEET;

export function Home() {
  const SHEET_DATA = useTabletop(key);

  if (SHEET_DATA.length === 0) {
    return <h1> Carregando... </h1>;
  }

  return (
    <>
      <NavBar />
      <Row>
        {SHEET_DATA.map((sheetRow, index) => {
          return (
            <Col sm={4} key={index}>
              <ChallengeCard
                name={sheetRow.name}
                description={sheetRow.description}
                level={sheetRow.level}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
