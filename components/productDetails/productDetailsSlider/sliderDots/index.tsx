import { StyledSliderDots } from "./styled";

interface SliderDotsProps {
  dots: React.ReactNode;
}

export const SliderDots: React.FC<SliderDotsProps> = ({ dots }) => {
  return <StyledSliderDots>{dots}</StyledSliderDots>;
};
