import Image from "next/image";
import { StyledSliderDot } from "./styled";

interface SliderDotProps {
  i: number;
  image: string;
  curSlide: number;
}

export const SliderDot: React.FC<SliderDotProps> = ({ i, image, curSlide }) => {
  return (
    <StyledSliderDot active={i === curSlide}>
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
