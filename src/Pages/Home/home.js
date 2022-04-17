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
    animation: float 1.5s infinite alternate ease-in-out;

    @keyframes float {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(25px);
        filter: drop-shadow(2px 2px 5px ${(p) => p.theme.secundary});
      }
    }
  }
`;

export const Infos = styled.section`
  width: 30%;
  animation: entrance 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes entrance {
    0% {
      opacity: 0;
    }
    100% {
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
