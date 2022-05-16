import { StyledButton } from "./styled";

interface ButtonProps {
  clicked: () => void;
  type: "submit" | "button";
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ clicked, type, children }) => {
  return (
    <StyledButton onClick={clicked} type={type}>
      {children}
    </StyledButton>
  );
};
