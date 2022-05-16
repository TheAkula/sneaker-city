import { useState } from "react";
import Image from "next/image";
import { Settings } from "react-slick";
import { SliderArrow } from "./sliderArrow";
import { SliderDot } from "./sliderDot";
import {
  StyledImageContainer,
  StyledSlide,
  StyledSlider,
  StyledSliderWrapper,
} from "./styled";
import { SliderDots } from "./sliderDots";

interface SliderProps {
  images: string[];
  title: string;
  price: number;
}

export const ProductSlider: React.FC<SliderProps> = ({
  images,
  title,
  price,
}) => {
  const [curSlide, setCurSlide] = useState(0);

  const sliderSettings: Settings = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    nextArrow: <SliderArrow type="right" />,
    prevArrow: <SliderArrow type="left" />,
    customPaging: (i) => {
      return <SliderDot i={i} image={images[i]} curSlide={curSlide} />;
    },
    afterChange: (cs) => {
      setCurSlide(cs);
    },
    appendDots: (dots) => <SliderDots dots={dots} />,
  };

  return (
    <>
      {images.length > 1 ? (
        <StyledSliderWrapper>
          <div className="slider__info">
            <h1>{title}</h1>
            <p>{price}RWF</p>
          </div>
          <StyledSlider {...sliderSettings}>
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
        </StyledSliderWrapper>
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
