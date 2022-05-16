import Image from "next/image";
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
    <StyledSliderDot active={i === curSlide} onClick={onClickedHandler}>
      <div className="content">
        <div className="image-container">
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </StyledSliderDot>
  );
};
