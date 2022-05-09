import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(p) => p.theme.black};
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: left;
  padding: 75px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 30px;
    color: #0d0d0d;
    font-weight: 500;
    margin-bottom: 25px;
    text-align: left;
  }
`;

export const Highlighted = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fast-entrance 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes fast-entrance {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h3 {
    color: #0d0d0d;
    font-weight: 400;
    font-size: 20px;
  }

  div {
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-around;
    gap: 25px;
    overflow-x: auto;
  }
`;

export const Projects = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: entrance-one 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes entrance-one {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  h3 {
    color: #0d0d0d;
    font-weight: 400;
    font-size: 20px;
  }

  div {
    width: 100%;
    height: 95%;
    overflow: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
`;
