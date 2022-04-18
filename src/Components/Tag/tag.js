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
    background-color: #1874cd80;
  }

  &.react {
    background-color: #87ceeb80;
  }

  &.mysql {
    background-color: #daa52080;
  }

  &.nodejs {
    background-color: #9acd3280;
  }

  &.express {
    background-color: #6b8e2380;
  }

  &.nodejs {
    background-color: #b0306080;
  }
`;
