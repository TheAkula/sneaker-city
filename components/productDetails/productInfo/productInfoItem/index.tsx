import { useState } from "react";
import {
  StyledDescriptionItem,
  StyledDescriptionItemHead,
  ArrowImageContainer,
} from "./styled";
import { ArrowUpImage } from "../../../svgComponents/arrowUp";

interface ProductInfoItemProps {
  title: string;
  children: string;
}

export const ProductInfoItem: React.FC<ProductInfoItemProps> = ({
  title,
  children,
}) => {
  const [show, setShow] = useState(true);

  const onClickedHandler = () => {
    setShow(!show);
  };

  return (
    <StyledDescriptionItem>
      <StyledDescriptionItemHead onClick={onClickedHandler}>
        <h3>{title}</h3>
        <ArrowImageContainer active={show}>
          <ArrowUpImage />
        </ArrowImageContainer>
      </StyledDescriptionItemHead>
      {show && <p className="content">{children}</p>}
    </StyledDescriptionItem>
  );
};
