import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
    text-align: left;
  }
`;

export const divProjeto = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-around;

  .imgProject {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgProject > img {
    width: 100%;
  }

  .infoProject {
    width: 45%;
    color: ${(p) => p.theme.text};
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.secundary};
    font-weight: bolder;
  }
`;

export const Category = styled.p`
  width: 100px;
  height: 50px;

  /* .html {
    background-color: ;
  } */
`;
