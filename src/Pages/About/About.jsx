import React from "react";
import * as S from "./about.js";

const About = ({ theme }) => {
  const urlAbout = `/assets/img/BGAbout-${theme ? "dark" : "light"}.svg`;
  const urlSkills = `/assets/img/BGSkills-${theme ? "dark" : "light"}.svg`;
  return (
    <>
      <S.About
        style={{
          backgroundImage: `url(${urlAbout})`,
          backgroundPosition: "right, 0 ",
        }}
      >
        <S.Text>
          <h1>Sobre</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod unde
            veniam, corrupti molestiae asperiores vero magnam commodi modi quo,
            reprehenderit expedita dolore beatae optio necessitatibus corporis,
            numquam quidem ab quas. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident, illum. Eaque, quod asperiores ut beatae
            incidunt corporis optio quia hic ipsa similique veniam doloremque,
            saepe, quas adipisci perferendis iusto necessitatibus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus qui explicabo
            voluptas, assumenda repellendus accusantium ipsum, facilis in
            inventore provident quibusdam impedit, nihil laudantium sit fugiat
            obcaecati? Libero, magni. Eum!
          </p>
        </S.Text>
      </S.About>
      <S.Skills
        style={{
          backgroundImage: `url(${urlSkills})`,
          backgroundPosition: "right, 0 ",
        }}
      >
        <h1>
          Habilidades <br />e ferramentas
        </h1>
        
      </S.Skills>
    </>
  );
};

export default About;
