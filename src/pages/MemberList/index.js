import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MemberCard } from '../../components/MemberCard';
import { useTabletop } from '../../hooks/useTableTop';

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
          const {
            nome,
            level,
            licenca,
            github_username: githubUsername,
            warning,
            periodo_licenca: periodoLicenca,
            turno,
            atividades_entregues: atividadesEntregues
          } = sheetRow;
          return (
            <Col sm={4} key={index}>
              <MemberCard
                name={nome}
                level={level}
                licenca={licenca}
                githubUsername={githubUsername}
                warning={warning}
                periodoLicenca={periodoLicenca}
                turno={turno ? turno : 'Não definido'}
                atividadesEntregues={
                  atividadesEntregues ? atividadesEntregues : 0
                }
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
