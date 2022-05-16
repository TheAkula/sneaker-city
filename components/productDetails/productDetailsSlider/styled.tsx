import Slider from "react-slick";
import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledSlider = styled(Slider)`
  width: 944px;
  padding-top: 96px;
  height: 820px;
  background-color: ${baseTheme.colors.lightGrayBg};
`;

export const StyledSlide = styled.div``;

export const StyledImageContainer = styled.div`
  width: 584px;
  height: 456px;
  position: relative;
  margin: 0 auto;
`;
