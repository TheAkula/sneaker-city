import styled from "styled-components";
import { baseTheme } from "../../../../styles/baseTheme";

interface StyledSliderArrowProps {
  type: "right" | "left";
}

export const StyledSliderArrow = styled.div<StyledSliderArrowProps>`
  width: 24px;
  height: 24px;
  position: absolute;
  top: calc(50% + 12px);
  ${({ type }) => (type === "left" ? "left: 64px" : "right: 64px")};
  z-index: ${baseTheme.zIndex.sliderArrow};
  cursor: pointer;
`;
