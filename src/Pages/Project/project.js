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
  justify-content: space-between;

  h1 {
    font-size: 30px;
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const divInfo = styled.div`
  width: 85%;
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
`;
