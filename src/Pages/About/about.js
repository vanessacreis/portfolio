import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  background-size: contain;
`;

export const About = styled.section`
  width: 100%;
  height: 100vh;
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
    font-weight: 400;
    line-height: 28px;
    text-align: justify;
  }
`;

export const Skills = styled.section`
  width: 100%;
  height: 100vh;
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
