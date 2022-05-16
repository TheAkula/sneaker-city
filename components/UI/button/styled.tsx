import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledButton = styled.button`
  background-color: ${baseTheme.colors.btnBg};
  color: #fff;
  font-size: 16px;
  padding: 10px 24px;
  cursor: pointer;
  border: none;
  outline: none;
`;
