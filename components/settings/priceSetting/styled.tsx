import { Slider } from "@mui/material";
import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 224px;
`;

export const CustomSlider = styled(Slider)`
  color: #000;
  height: 2px;

  .MuiSlider-thumb {
    background-color: #000;
    width: 12px;
    height: 12px;
    box-shadow: none;
  }

  .MuiSlider-valueLabel {
    font-size: 12px;
    font-weight: 500;
    color: #000;
    top: calc(100% + 25px);
    background-color: unset;
  }
`;
