import Link from "next/link";

interface HeaderIconProps {
  children: React.ReactNode;
  path: string;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({ children, path }) => {
  return (
    <Link href={path}>
      <a>{children}</a>
    </Link>
  );
};
