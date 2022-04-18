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

  .iconImg {
    width: 350px;
    height: 350px;
    transition: all 1s;
    animation: fadein 1.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @keyframes fadein {
      0% {
        transform: translateZ(180px);
        opacity: 0;
      }
      100% {
        transform: translateZ(0);
        opacity: 1;
      }
    }
  }
`;

export const Infos = styled.section`
  width: 30%;
  animation: fadein 1.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @keyframes fadein {
    0% {
      transform: translateZ(180px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }

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
    transition: all 0.5s;
    &:hover {
      width: 40px;
      height: 40px;
    }
  }

  .iconMail {
    width: 40px;
    height: 50px;
    transition: all 0.5s;

    &:hover {
      width: 45px;
    }
  }
`;
