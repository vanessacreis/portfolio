import styled from "styled-components";

export const Info = styled.div`
  width: 45%;
  color: ${(p) => p.theme.text};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  text-align: justify;
  padding-right: 15px;

  a {
    text-decoration: none;
    color: ${(p) => p.theme.primary};
  }
`;
