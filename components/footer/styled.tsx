import styled from "styled-components";
import { baseTheme } from "../../styles/baseTheme";

export const StyledFooter = styled.footer`
  height: 160px;
  display: flex;
  border-top: 1px solid ${baseTheme.colors.line};
  align-items: center;
  color: ${baseTheme.colors.text2};

  .footer__wrapper {
    display: flex;
    align-items: center;
  }

  .footer__inner {
    display: flex;
  }

  .footer__menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 100px;
    row-gap: 14px;
  }

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
    min-width: 770px;
    width: 100%;
    justify-content: space-between;
  }

  .footer__icon {
    width: 32px;
    height: 32px;
  }
`;
