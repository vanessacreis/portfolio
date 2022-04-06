import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  background-position: right;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const Category = styled.p`
  width: 100px;
  height: 50px;

  /* .html {
    background-color: ;
  } */
`;
