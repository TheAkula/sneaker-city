import styled from "styled-components";
import { baseTheme } from "../../styles/baseTheme";

export const StyledFooter = styled.footer`
  height: 160px;
  color: ${baseTheme.colors.text2};
  border-top: 1px solid ${baseTheme.colors.line};
  display: grid;

  .footer__icons {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .support-line span:first-child {
    margin-right: 8px;
  }

  .footer__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 770px;
    max-width: 100%;
  }

  .footer__icon {
    width: 32px;
    height: 32px;
  }
`;
