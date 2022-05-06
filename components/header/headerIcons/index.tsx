import { HeaderIcon } from "./headerIcon";
import { StyledHeaderIcons } from "./styled";
import { CartImage } from "../../svgComponents/cartIcon";
import { ChosenImage } from "../../svgComponents/chosenIcon";
import { UserImage } from "../../svgComponents/userIcon";

export const HeaderIcons = () => {
  return (
    <StyledHeaderIcons>
      <HeaderIcon path="/cart">
        <CartImage />
      </HeaderIcon>
      <HeaderIcon path="/chosen">
        <ChosenImage />
      </HeaderIcon>
      <HeaderIcon path="/profile">
        <UserImage />
      </HeaderIcon>
    </StyledHeaderIcons>
  );
};
