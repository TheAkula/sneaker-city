import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledShoppingCartItem = styled.div`
  display: grid;
  height: 128px;
  background-color: ${baseTheme.colors.lightGrayBg};
  align-items: center;
  padding: 0 32px;
  grid-template-columns: 300px 116px 150px;
  justify-content: space-between;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }

  .image-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    cursor: pointer;

    h4 {
      font-size: 18px;
      font-weight: 500;
    }

    span {
      color: ${baseTheme.colors.text2};
      font-size: 16px;
    }
  }

  .price {
    font-size: 18px;
    font-weight: 500;
    text-align: end;
  }
`;
