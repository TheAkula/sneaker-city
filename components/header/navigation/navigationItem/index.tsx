import { StyledNavigationItem } from "./styled";
import Link from "next/link";

interface NavigationItemProps {
  path: string;
  children: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  path,
}) => {
  return (
    <li>
      <Link href={path}>
        <StyledNavigationItem>{children}</StyledNavigationItem>
      </Link>
    </li>
  );
};
