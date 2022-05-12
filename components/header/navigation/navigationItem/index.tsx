import { StyledNavigationItem } from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationItemProps {
  path: string;
  children: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  path,
}) => {
  const router = useRouter();

  return (
    <li>
      <Link href={path} passHref>
        <StyledNavigationItem active={router.asPath === path}>
          {children}
        </StyledNavigationItem>
      </Link>
    </li>
  );
};
