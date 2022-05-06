import { ChangeEventHandler } from "react";
import { StyledBrand } from "./styled";

interface BrandProps {
  changed: (b: string) => void;
  brand: string;
}

export const Brand: React.FC<BrandProps> = ({ changed, brand }) => {
  const onCheckedHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    changed(brand);
  };

  return (
    <StyledBrand>
      <input
        type="checkbox"
        onChange={onCheckedHandler}
        id={brand}
        name="brands"
      />
      <label htmlFor={brand}>{brand}</label>
    </StyledBrand>
  );
};
