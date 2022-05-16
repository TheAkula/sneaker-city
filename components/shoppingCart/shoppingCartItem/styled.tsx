import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledShoppingCartItem = styled.div`
  display: flex;
  height: 128px;
  background-color: ${baseTheme.colors.lightGrayBg};
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;

  .image-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;

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
  }
`;
