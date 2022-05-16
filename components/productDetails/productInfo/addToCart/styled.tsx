import styled from "styled-components";
import { baseTheme } from "../../../../styles/baseTheme";

export const StyledAddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 105px;

  .counter {
    display: flex;
    gap: 16px;
    align-items: center;

    .counter__control {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .counter__output {
      width: 48px;
      height: 48px;
      border: 1px solid ${baseTheme.colors.line};
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 16px;
      }
    }
  }
`;
