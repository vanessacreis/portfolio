import React from "react";
import * as S from "./infoproject.js";

const InfoProject = (props) => {
  return (
    <S.Info>
      <p>{props.description}</p>
      <p>
        Github: <a href={props.github}>Link do repositório</a>.
      </p>
      <p>
        Deploy: <a href={props.deploy}>Link do deploy</a>.
      </p>
      <p>aaaaaaaaaaaaaaaa</p>
    </S.Info>
  );
};

export default InfoProject;
