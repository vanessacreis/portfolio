import styled from "styled-components";

export const Skill = styled.div`
  width: 75%;
  display: flex;
  margin: 10px;

  p {
    min-width: 120px;
    color: ${(p) => p.theme.text};
    font-size: 14px;
    text-transform: uppercase;
  }

  div {
    width: ${(p) => p.progress}%;
    flex: none;
    height: 15px;
    background: linear-gradient(
      90deg,
      ${(p) => p.theme.primary} 0%,
      ${(p) => p.theme.secundary} 70%
    );
    border-radius: 25px;
    color: ${(p) => p.theme.text};
    text-align: end;
    animation: progressbar 1s linear forwards;

    /* @keyframes progressbar {
      0% {
        width: 0%;
      }
      100% {
        width: ${(p) => p.progress}%;
      }
    } */
  }

  div > span {
    margin-right: 10px;
  }
`;
