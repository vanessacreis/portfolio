import styled from "styled-components";

export const Info = styled.div`
  width: 45%;
  color: ${(p) => p.theme.text};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: justify;
  padding-right: 15px;
  animation: entrance-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes entrance-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.primary};
  }
`;
