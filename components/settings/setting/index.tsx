import { StyledSetting } from "./styled";

interface SettingProps {
  title: string;
  children: React.ReactNode;
}

export const Setting: React.FC<SettingProps> = ({ title, children }) => {
  return (
    <StyledSetting>
      <h3>{title}</h3>
      {children}
    </StyledSetting>
  );
};
