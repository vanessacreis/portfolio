import styled from "styled-components";

export const Skill = styled.div`
  width: 70%;
  display: flex;
  margin: 10px;

  p {
    width: 100px;
    color: ${(p) => p.theme.text};
    font-size: 14px;
    text-transform: uppercase;
  }

  div {
    height: 20px;
    background: linear-gradient(
      90deg,
      ${(p) => p.theme.primary} 0%,
      ${(p) => p.theme.secundary} 70%
    );
    border-radius: 25px;
    color: ${(p) => p.theme.text};
    text-align: end;
  }

  div > span {
    margin-right: 10px;
  }
`;
