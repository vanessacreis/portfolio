import styled from "styled-components";

export const Info = styled.div`
  width: 32%;
  color: ${(p) => p.theme.text};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: justify;
  padding-right: 15px;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.primary};
  }
`;
