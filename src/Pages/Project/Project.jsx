import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./project.js";
import { projetos } from "../../Data/data.js";

const Project = ({ theme }) => {
  const url = `/assets/img/BGAbout-${theme ? "dark" : "light"}.svg`;
  const { name } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const [currentProject] = projetos.filter(
      (project) => project.name === name
    );
    setProject(currentProject);
  }, [name]);
  return (
    <S.Container
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>{project.name}</h1>
      <S.divProjeto>
        <div className="imgProject">
          <img src={project.img} alt="" />
        </div>
        <div className="infoProject">
          <p>{project.description}</p>
          <p>
            Github: <a href={project.github}>Link do repositório</a>.
          </p>
          <p>
            Deploy: <a href={project.deploy}>Link do deploy</a>.
          </p>
        </div>
      </S.divProjeto>
    </S.Container>
  );
};

export default Project;
