import React from "react";
import * as S from "./portfolio.js";
import Project from "../../Components/Project/Project.jsx";
import { projetos } from "../../Data/data.js";

const Portfolio = ({ theme }) => {
  const url = `/assets/img/BGPortfolio-${theme ? "dark" : "light"}.svg`;
  return (
    <S.Container
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "left",
      }}
    >
      <h1>Portfólio</h1>
      <div>
        {projetos.map((projeto) => {
          return (
            <Project key={projeto.name} name={projeto.name} img={projeto.img} />
          );
        })}
      </div>
    </S.Container>
  );
};

export default Portfolio;
