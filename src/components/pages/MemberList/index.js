import React from 'react';
import { Row, Col } from '../../../../node_modules/react-bootstrap';
import { useTabletop } from '../../../hooks/useTableTop';
import { ChallangeCard } from '../../ChallangeCard';

const key = process.env.REACT_APP_MEMBERLIST_SHEET;

export function Memberlist() {
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
                name={sheetRow.nome}
                level={sheetRow.level}
                licenca={sheetRow.licenca}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
