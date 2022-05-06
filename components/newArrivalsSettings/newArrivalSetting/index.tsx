import { StyledSetting } from "./styled";

interface SettingProps {
  title: string;
  children: React.ReactNode;
}

export const NewArrivalSetting: React.FC<SettingProps> = ({
  title,
  children,
}) => {
  return (
    <StyledSetting>
      <h3>{title}</h3>
      {children}
    </StyledSetting>
  );
};
