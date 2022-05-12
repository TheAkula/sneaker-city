import { HeaderIcons } from "./headerIcons";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { StyledHeader, StyledHeaderInner } from "./styled";

interface HeaderProps {
  categories: string[];
}

export const Header: React.FC<HeaderProps> = ({ categories }) => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledHeaderInner>
          <Logo />
          <Navigation categories={categories} />
          <HeaderIcons />
        </StyledHeaderInner>
      </div>
    </StyledHeader>
  );
};
