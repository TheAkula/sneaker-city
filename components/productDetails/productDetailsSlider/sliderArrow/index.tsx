import { CustomArrowProps } from "react-slick";
import { ArrowLeftImage } from "../../../svgComponents/arrowLeft";
import { ArrowRightImage } from "../../../svgComponents/arrowRight";
import { StyledSliderArrow } from "./styled";

type SliderArrowProps = {
  type: "left" | "right";
} & CustomArrowProps;

export const SliderArrow: React.FC<SliderArrowProps> = (props) => {
  return (
    <StyledSliderArrow
      type={props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.type === "left" ? (
        <ArrowLeftImage />
      ) : props.type === "right" ? (
        <ArrowRightImage />
      ) : null}
    </StyledSliderArrow>
  );
};
