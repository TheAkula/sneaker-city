import styled from "styled-components";
import { baseTheme } from "../../../../styles/baseTheme";

export const StyledCheckboxContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
  :last-child {
    margin-bottom: 0;
  }
  input {
    visibility: hidden;
    position: relative;
    width: 14px;
    height: 14px;
    ::before {
      cursor: pointer;
      content: "";
      position: absolute;
      box-sizing: border-box;
      left: 0;
      top: 0;
      visibility: visible;
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      border: 1px solid ${baseTheme.colors.line};
    }
    :checked::before {
      border: 1px solid rgb(62, 162, 255);
    }
  }
  label {
    cursor: pointer;
  }
`;
