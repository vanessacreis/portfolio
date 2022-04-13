import styled from "styled-components";

export const Tag = styled.p`
  width: 60px;
  height: 40px;
  color: ${(p) => p.theme.text};
  border-radius: 25px;

  &.html {
    background-color: #ff8c0080;
  }

  &.javascript {
    background-color: #ffd70080;
  }

  &.css {
    background-color: #1874CD80;
  }

  &.react {
    background-color: #1874CD80;
  }
`;
