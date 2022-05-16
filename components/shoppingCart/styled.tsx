import styled from "styled-components";
import { baseTheme } from "../../styles/baseTheme";
import { Button } from "../UI/button";

export const StyledShoppingCart = styled.div`
  padding: 0 64px;

  .cart__inner {
    display: grid;
    grid-template-columns: 880px 1fr;
    column-gap: 64px;
    padding-top: 32px;
    padding-bottom: 260px;

    h1 {
      font-size: 24px;
      margin-bottom: 21px;
    }
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px 28px;
`;

export const OrderSummary = styled.div`
  h2 {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.75);
    margin-bottom: 32px;
    padding-left: 7px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    justify-content: space-between;
    padding-left: 7px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  .li__title {
    color: ${baseTheme.colors.text2};
    font-weight: 500;
    font-size: 16px;
  }

  .li__price {
    font-size: 16px;
    font-weight: 500;
    padding-right: 32px;
  }

  .line {
    height: 1px;
    background-color: ${baseTheme.colors.line};
    margin-top: 22px;
    margin-bottom: 24px;
  }

  .total-price {
    display: block;
    margin-left: auto;
    width: fit-content;
    margin-bottom: 64px;
  }
`;
