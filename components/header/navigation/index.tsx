import { StyledNavigation } from "./styled";
import { NavigationItem } from "./navigationItem";

interface NavigationProps {
  categories: string[];
}

export const Navigation: React.FC<NavigationProps> = ({ categories }) => {
  return (
    <nav>
      <StyledNavigation>
        <NavigationItem path="/">All Products</NavigationItem>
        {categories.map((category) => {
          return (
            <NavigationItem key={category} path={"/category/" + category}>
              {category[0].toUpperCase() + category.slice(1)}
            </NavigationItem>
          );
        })}
      </StyledNavigation>
    </nav>
  );
};
