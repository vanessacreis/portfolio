import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const About = styled.section`
  width: 100%;
  min-height: 70vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: entrance-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes entrance-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  width: 80%;
  height: 45%;
  font-size: 20px;
  color: ${(p) => p.theme.text};
  font-weight: 300;
  line-height: 28px;
  text-align: justify;
`;

export const Skills = styled.section`
  width: 100%;
  min-height: 80vh;
  background-repeat: no-repeat;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: entrance-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes entrance-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
