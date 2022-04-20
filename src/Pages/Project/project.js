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
    text-align: left;
  }
`;

export const divInfo = styled.div`
  width: 95%;
  height: 85%;
  display: flex;
  justify-content: space-around;

  .imgProject {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @keyframes slide-in-right {
      0% {
        transform: translateX(1000px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .imgProject > img {
    width: 100%;
    border-radius: 10px;
  }
`;
