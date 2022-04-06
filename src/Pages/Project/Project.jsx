import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./project.js";

const Project = ({ theme }) => {
  const url = `/assets/img/BGAbout-${theme ? "dark" : "light"}.svg`;
  const { id, name } = useParams();
  return (
    <S.Container
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>{name}</h1>
    </S.Container>
  );
};

export default Project;
