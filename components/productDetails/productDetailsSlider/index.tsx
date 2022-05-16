import { useRef, useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { SliderArrow } from "./sliderArrow";
import { SliderDot } from "./sliderDot";
import {
  StyledImageContainer,
  StyledSlide,
  StyledSlider,
  StyledSliderWrapper,
} from "./styled";
import { SliderDots } from "./sliderDots";
import { ChosenImage } from "../../svgComponents/chosenIcon";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  selectChosen,
  toggleChosen,
} from "../../../redux/reducers/chosenReducer";
import { ChosenFilledImage } from "../../svgComponents/chosenFilledIcon";

interface SliderProps {
  images: string[];
  title: string;
  price: number;
  id: number;
}

export const ProductSlider: React.FC<SliderProps> = ({
  images,
  title,
  price,
  id,
}) => {
  const [curSlide, setCurSlide] = useState(0);
  const chosen = useAppSelector(selectChosen);
  const sliderRef = useRef<null | Slider>(null);

  const dispatch = useAppDispatch();

  const onDotClicked = (i: number) => {
    sliderRef.current?.slickGoTo(i);
  };

  const onChoose = () => {
    dispatch(toggleChosen(id));
  };

  const sliderSettings: Settings = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    nextArrow: <SliderArrow type="right" />,
    prevArrow: <SliderArrow type="left" />,
    customPaging: (i) => {
      return (
        <SliderDot
          i={i}
          image={images[i]}
          curSlide={curSlide}
          clicked={onDotClicked}
        />
      );
    },
    afterChange: (cs) => {
      setCurSlide(cs);
    },
    appendDots: (dots) => <SliderDots dots={dots} />,
  };

  let isChosen = false;
  if (chosen) {
    isChosen = chosen.includes(id);
  }

  return (
    <>
      {images.length > 1 ? (
        <StyledSliderWrapper>
          <div className="slider__info">
            <h1>{title}</h1>
            <p>{price}RWF</p>
          </div>
          <div className="add-to-chosen" onClick={onChoose}>
            {isChosen ? <ChosenFilledImage /> : <ChosenImage />}
          </div>
          <StyledSlider {...sliderSettings} ref={sliderRef}>
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
