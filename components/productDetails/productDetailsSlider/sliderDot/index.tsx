import { ImageContainer } from "../../../imageContainer";
import { StyledSliderDot } from "./styled";

interface SliderDotProps {
  i: number;
  image: string;
  curSlide: number;
  clicked: (i: number) => void;
}

export const SliderDot: React.FC<SliderDotProps> = ({
  i,
  image,
  curSlide,
  clicked,
}) => {
  const onClickedHandler = () => {
    clicked(i);
  };

  return (
    <StyledSliderDot onClick={onClickedHandler}>
      <ImageContainer image={image} active={i === curSlide} />
    </StyledSliderDot>
  );
};
