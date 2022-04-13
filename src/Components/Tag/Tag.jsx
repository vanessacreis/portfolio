import React from "react";
import * as S from "./tag.js";

const Tag = (props) => {
  return <S.Tag className={props.stack}>{props.stack}</S.Tag>;
};

export default Tag;
