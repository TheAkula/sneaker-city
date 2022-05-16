import Slider from "react-slick";
import styled from "styled-components";
import { baseTheme } from "../../../styles/baseTheme";

export const StyledSliderWrapper = styled.div`
  position: relative;

  .slider__info {
    position: absolute;
    left: 64px;
    top: 96px;
    z-index: ${baseTheme.zIndex.sliderInfo};
    max-width: 270px;

    h1 {
      font-size: 36px;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      color: ${baseTheme.colors.text2};
    }
  }
`;

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
