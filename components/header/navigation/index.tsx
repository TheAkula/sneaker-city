import { StyledNavigation } from "./styled";
import { NavigationItem } from "./navigationItem";

export const Navigation = () => {
  return (
    <nav>
      <StyledNavigation>
        <NavigationItem path="/new-arrivals">New Arrivals</NavigationItem>
        <NavigationItem path="/men">Men</NavigationItem>
        <NavigationItem path="/women">Women</NavigationItem>
        <NavigationItem path="/kids">Kids</NavigationItem>
      </StyledNavigation>
    </nav>
  );
};
