import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledProduct = styled.a`
  display: block;
  width: 310px;
  overflow: hidden;
  text-decoration: none;
  padding-bottom: 24px;

  .image-container {
    height: 308px;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    color: ${baseTheme.colors.text1};
  }

  p {
    color: ${baseTheme.colors.text2};
    font-size: 16px;
    font-weight: 500;
  }
`;
