import React from "react";
import * as S from "./progressBar.js";

const ProgressBar = (props) => {
  console.log(props.progress);
  return (
    <S.Skill>
      <p>{props.skill}</p>
      <div style={{ width: `${props.progress}%` }}>
        <span>{props.progress}%</span>
      </div>
    </S.Skill>
  );
};

export default ProgressBar;