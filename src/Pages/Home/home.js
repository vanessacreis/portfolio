import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  section > img {
    width: 350px;
    height: 350px;
  }
`;

export const Infos = styled.section`
  width: 30%;

  > h1 {
    line-height: 46px;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: bold;
  }

  > p {
    font-size: 26px;
    line-height: 36px;
    font-weight: 300;
  }

  div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .iconInfo {
    width: 35px;
    height: 35px;
  }

  .iconMail {
    width: 40px;
    height: 50px;
  }
`;
