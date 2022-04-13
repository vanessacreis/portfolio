import styled from "styled-components";

export const Info = styled.div`
  width: 40%;
  color: ${(p) => p.theme.text};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: justify;

  a {
    text-decoration: none;
    color: ${(p) => p.theme.secundary};
    font-weight: bolder;
  }
`;
