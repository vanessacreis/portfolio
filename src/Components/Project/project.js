import styled from "styled-components";

export const Project = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  animation: all 3s both;

  &.destaque {
    width: 45%;
    height: 88%;
    font-size: 25px;
  }

  &.mini {
    width: 25%;
    height: 90%;
    font-size: 20px;
  }

  .titulo {
    color: ${(p) => p.theme.primary};
    font-weight: 500;
    text-align: center;
    line-height: 35px;
    visibility: hidden;
    border: 1px solid ${(p) => p.theme.secundary};
    border-radius: 5px;
    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #10101075;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  &:hover {
    .titulo {
      visibility: visible;
      animation: all 1s both;
    }
  }
`;
