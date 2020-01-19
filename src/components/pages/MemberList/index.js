import React from 'react';
import { Row, Col } from '../../../../node_modules/react-bootstrap';
import { useTabletop } from '../../../hooks/useTableTop';
import { MemberCard } from '../../MemberCard';

const key = process.env.REACT_APP_MEMBERLIST_SHEET;

export function Memberlist() {
  const MEMBERS_LIST = useTabletop(key);

  if (MEMBERS_LIST.length === 0) {
    return <h1> Carregando... </h1>;
  }

  return (
    <>
      <Row>
        {MEMBERS_LIST.map((sheetRow, index) => {
          return (
            <Col sm={4} key={index}>
              <MemberCard
                name={sheetRow.nome}
                level={sheetRow.level}
                licenca={sheetRow.licenca}
                github_username={sheetRow.github_username}
                warning={sheetRow.warning}
                periodo_licenca={sheetRow.periodo_licenca}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
