import React from "react";
import * as S from "./home.js";

const Home = ({ theme }) => {
  const url = `/assets/img/BGHome-${theme ? "dark" : "light"}.svg`;
  return (
    <S.Container style={{ backgroundImage: `url(${url})` }}>
      <S.Infos>
        <h1>Vanessa Reis</h1>
        <p>Full Stack Developer</p>
        <div>
          <a href="https://github.com/vanessacreis">
            <img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="iconInfo"
            />
          </a>
          <a href="https://www.linkedin.com/in/vanessacreisbh/">
            <img
              src="/assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="iconInfo"
            />
          </a>
          <a href="mailto:vanessacreis@live.com">
            <img
              src="/assets/icons/mail.svg"
              alt="E-mail"
              className="iconMail"
            />
          </a>
        </div>
      </S.Infos>
      <section>
        <img src="/assets/img/imgme.svg" alt="" className="iconImg" />
      </section>
    </S.Container>
  );
};

export default Home;
