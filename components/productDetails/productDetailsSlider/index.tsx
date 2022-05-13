import Slider from "react-slick";
import Image from "next/image";
import { StyledImageContainer, StyledSlide, StyledSlider } from "./styled";

interface SliderProps {
  images: string[];
}

export const ProductSlider: React.FC<SliderProps> = ({ images }) => {
  return (
    <>
      {images.length > 1 ? (
        <StyledSlider infinite={true} slidesToShow={1} dots={true}>
          {images.map((img, i) => {
            return (
              <StyledSlide key={i}>
                <StyledImageContainer>
                  <Image
                    src={img}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </StyledImageContainer>
              </StyledSlide>
            );
          })}
        </StyledSlider>
      ) : images.length === 0 ? (
        <Image
          src={images[0]}
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      ) : null}
    </>
  );
};
