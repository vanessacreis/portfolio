import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  background-color: transparent;
  color: ${(p) => p.theme.primary};
  padding: 0 30px;
  font-size: 16px;
  position: absolute;
  z-index: 2;

  .nav_link {
    color: ${(p) => p.theme.primary};
    text-decoration: none;
    font-family: ${(p) => p.theme.font};
  }

  .active {
    color: ${(p) => p.theme.secundary};
  }

  .buttonTheme {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
