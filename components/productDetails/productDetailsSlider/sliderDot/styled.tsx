import styled from "styled-components";

interface StyledSliderDotProps {
  active: boolean;
}

export const StyledSliderDot = styled.div<StyledSliderDotProps>`
  width: 96px;
  height: 80px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: ${({ active }) =>
    active ? "0px 2px 4px rgba(0, 0, 0, 0.16)" : "none"};
  cursor: pointer;
  padding: 4px;
  .content {
    border-radius: 6px;
    background: ${({ active }) =>
      active ? "linear-gradient(180deg, #F3E7E9 0%, #EFEEF5 100%)" : "#fff"};
    height: 100%;
    padding: 4px 8px;
  }

  .image-container {
    height: 100%;
    position: relative;
  }
`;
