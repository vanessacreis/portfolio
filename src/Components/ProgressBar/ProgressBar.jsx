import React from "react";
import * as S from "./progressBar.js";

const ProgressBar = (props) => {
  return (
    <S.Skill progress={props.progress}>
      <p>{props.skill}</p>
      <div>
        <span>{props.progress}%</span>
      </div>
    </S.Skill>
  );
};

export default ProgressBar;
