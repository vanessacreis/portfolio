import React from "react";
import * as S from "./project.js";

const Project = (props) => {
  return (
    <S.Project>
      <img src={props.img} alt="Tela do projeto" />
      <p>{props.name}</p>
    </S.Project>
  );
};

export default Project;
