import { StyledCheckboxContainer } from "./styled";
import {
  Rate,
  selectRate,
  setRate,
} from "../../../../redux/reducers/settingsReducer";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

interface RateInputProps {
  type: Rate;
  children: string;
}

export const RateInput: React.FC<RateInputProps> = ({ type, children }) => {
  const dispatch = useAppDispatch();
  const rate = useAppSelector(selectRate);

  const onCheckedHandler = () => {
    dispatch(setRate(type));
  };

  return (
    <StyledCheckboxContainer>
      <input
        type="radio"
        onChange={onCheckedHandler}
        id={children}
        name="rate"
        checked={rate === type}
      />
      <label htmlFor={children}>{children}</label>
    </StyledCheckboxContainer>
  );
};
