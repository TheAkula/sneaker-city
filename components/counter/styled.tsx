import styled from "styled-components";
import { baseTheme } from "../../styles/baseTheme";

export const StyledCounter = styled.div`
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
    background-color: #fff;

    span {
      font-size: 16px;
    }
  }
`;
