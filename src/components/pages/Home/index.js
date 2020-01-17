import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTabletop } from '../../../hooks/useTableTop';
import { ChallangeCard } from '../../ChallangeCard';

const key = process.env.REACT_APP_CHALLANGES_SHEET;

export function Home() {
  const SHEET_DATA = useTabletop(key);

  if (SHEET_DATA.length === 0) {
    return <h1> Carregando... </h1>;
  }

  return (
    <>
      <Row>
        {SHEET_DATA.map((sheetRow, index) => {
          return (
            <Col sm={4} key={index}>
              <ChallangeCard
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
