import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledSetting = styled.div`
  padding-left: 32px;
  padding-top: 32px;
  width: 302px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${baseTheme.colors.line};

  :last-child {
    border-bottom: none;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 18px;
  }
`;
