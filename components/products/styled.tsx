import styled from "styled-components";

export const StyledProducts = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 32px 0;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  min-height: 670px;
  grid-template-columns: repeat(auto-fit, 310px);
  row-gap: 64px;
  column-gap: 24px;
  padding-bottom: 92px;
`;
