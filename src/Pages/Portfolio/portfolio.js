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
    gap: 10px;
    overflow-x: auto;
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #0d0d0d;
    font-weight: 400;
    font-size: 20px;
  }

  div {
    width: 100%;
    height: 95%;
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
`;

export const Back = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #0d0d0d;
    font-weight: 400;
    font-size: 20px;
  }

  div {
    width: 100%;
    height: 95%;
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
`;

export const Dados = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #0d0d0d;
    font-weight: 400;
    font-size: 20px;
  }

  div {
    width: 100%;
    height: 95%;
    display: flex;
    gap: 10px;
    overflow-x: auto;
  }
`;
