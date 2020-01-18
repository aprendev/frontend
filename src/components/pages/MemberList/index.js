import React from 'react';
import { Row, Col } from '../../../../node_modules/react-bootstrap';
import { useTabletop } from '../../../hooks/useTableTop';
import { MemberCard } from '../../MemberCard';

const key = process.env.REACT_APP_MEMBERLIST_SHEET;

export function Memberlist() {
  // const MEMBERS_LIST = useTabletop(key);
  const MEMBERS_LIST = [
    { nome: 'Thauan', level: 'Aprendiz', licenca: 'true' },
    { nome: 'Goufix', level: 'Instrutor', licenca: 'false' }
  ];
  // console.log(MEMBERS_LIST);
  // if (MEMBERS_LIST.length === 0) {
  //   return <h1> Carregando... </h1>;
  // }

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
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
