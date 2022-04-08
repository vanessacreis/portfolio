import styled from "styled-components";

export const About = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.div`
  width: 70%;
  height: 50%;

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    color: ${(p) => p.theme.text};
    font-weight: 200;
    line-height: 28px;
    text-align: justify;
  }
`;

export const Skills = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
