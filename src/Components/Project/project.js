import styled from "styled-components";

export const Project = styled.div`
  width: 800px;
  height: 450px;
  display: flex;
  flex-direction: column;

  img {
    max-width: 90%;
    max-height: 70%;
    object-fit: contain;
  }

  p {
    color: ${(p) => p.theme.secundary};
    text-align: center;
  }
`;
