import React from "react";
import * as S from "./project.js";
import { Link } from "react-router-dom";

const Project = (props) => {
  console.log(props);
  return (
    <S.Project
      style={{ backgroundImage: `url(${props.img})` }}
      className={props.highlighted ? "destaque" : "mini"}
    >
      <Link to={`/projeto/${props.name}`} className="titulo">
        {props.name}
      </Link>
    </S.Project>
  );
};

export default Project;
