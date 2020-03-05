import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import TypeText from 'react-typing-animation';
import { NavBar } from '../../components/NavBar';
import { getUserData } from '../../services/auth';

export function Home() {
  const [typeSpeed, setTypeSpeed] = useState(0);

  useEffect(() => {
    async function isNewUser() {
      const result = await getUserData();
      return result.newUser;
    }
    if (isNewUser()) {
      setTypeSpeed(30);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Row>
        <Col />
        <Col>
          <TypeText speed={typeSpeed}>
            Seja bem vindo ao <b>Aprendev</b>!
            <hr />
            Aqui você vai encontrar desafios semanais que devem ser entregues
            por você para que tenha um aprendizado novo toda semana.
            <br /> Ao acessar a página de desafios você vai encontrar 3 desafios
            para o seu nível, que inicialmente será <b>Aprendiz</b>. Você{' '}
            <b>deve</b> fazer pelo menos 1 dos desafios. Você <b>pode</b> fazer
            quantos desafios quiser. Cada desafio vale um ponto, que vai contar
            para seu crescimento e recompensas dentro do <b>Aprendev</b>
            <hr />
            <b>O que acontece se eu não fizer nenhum desafio?</b>
            <b> R:</b> Você será colocado em aviso, caso não o faça por duas
            semanas seguidas, será automaticamente expulso do grupo.
            <br />
            <b>Se eu for expulso, eu posso voltar?</b>
            <b> R:</b> Sim, porém você irá retornar ocupando o level{' '}
            <b>aprendiz</b> e terá seus pontos <b>zerados</b>.
          </TypeText>
        </Col>
        <Col />
      </Row>
    </>
  );
}
