import React from "react";
import { skills } from "../../Data/skills.js";
import ProgressBar from "../../Components/ProgressBar/ProgressBar.jsx";
import * as S from "./about.js";

const About = ({ theme }) => {
  const urlAbout = `/assets/img/BGAbout-${theme ? "dark" : "light"}.svg`;
  return (
    <S.Container
      style={{
        backgroundImage: `url(${urlAbout})`,
      }}
    >
      <S.About>
        <h1>Sobre</h1>
        <S.Text>
          Vanessa Reis tem 26 anos, é mineira e historiadora que descobriu que
          não precisava ser <i>de exatas</i> para ser uma desenvolvedora.
          Durante sua formação na Resilia Educação, adquiriu habilidades de
          Front e Back-end, além das soft-skills necessárias para seguir
          evoluindo como profissional. Dentre os projetos realizados, se
          destacou no desenvolvimento do front-end de uma barbearia utilizando
          HTML, CSS e Javascript (você poderá vê-lo na seção de projetos).
          <br />É apaixonada por aprender, compartilhar conhecimento e nas horas
          vagas está sempre com um livro na mão. Atualmente está aprendendo
          React.JS, Typescript e desenvolvendo a aplicação de uma livraria.
        </S.Text>
      </S.About>
      <S.Skills>
        <h1>Habilidades</h1>
        {skills.map((skill) => {
          return (
            <ProgressBar
              key={skill.id}
              skill={skill.skill}
              progress={skill.progress}
            />
          );
        })}
      </S.Skills>
    </S.Container>
  );
};

export default About;
