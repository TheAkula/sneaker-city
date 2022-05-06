import { HeaderIcons } from "./headerIcons";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { StyledHeader, StyledHeaderInner } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledHeaderInner>
          <Logo />
          <Navigation />
          <HeaderIcons />
        </StyledHeaderInner>
      </div>
    </StyledHeader>
  );
};
