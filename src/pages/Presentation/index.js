import React from 'react';
import Typing from 'react-typing-animation';
import { TextContainer } from './styles';

export function Presentation() {
  return (
    <>
      <TextContainer>
        <Typing speed={10}>
          Seja bem vindo ao <b>Aprendev</b>!
          <hr />
          <p>
            Aqui você vai encontrar desafios semanais que devem ser entregues
            por você para que tenha um aprendizado novo toda semana.
          </p>
          <p>
            Ao acessar a página de desafios você vai encontrar 3 desafios para o
            seu nível, que inicialmente será <b>Aprendiz</b>. Você <b>deve</b>{' '}
            fazer pelo menos 1 dos desafios. Você <b>pode</b> fazer quantos
            desafios quiser. Cada desafio vale um ponto, que vai contar para seu
            crescimento e recompensas dentro do <b>Aprendev</b>
          </p>
          <hr />
          <p>
            <b>O que acontece se eu não fizer nenhum desafio? </b>
            <b>R:</b> Você será colocado em aviso, caso não o faça por duas
            semanas seguidas, será automaticamente expulso do grupo.
          </p>
          <b>Se eu for expulso, eu posso voltar? </b>
          <b>R:</b> Sim, porém você irá retornar ocupando o level{' '}
          <b>aprendiz</b> e terá seus pontos <b>zerados</b>.
        </Typing>
      </TextContainer>
    </>
  );
}
