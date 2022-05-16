import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/reduxHooks";
import {
  selectCurPrice,
  selectPrice,
  setPrice,
} from "../../../redux/reducers/settingsReducer";
import { Setting } from "../setting";
import { SliderContainer, CustomSlider } from "./styled";

function valueText(value: number) {
  return value ? value + "RWF" : "0RWF";
}

export const PriceSetting = () => {
  const price = useAppSelector(selectPrice);
  const curPrice = useAppSelector(selectCurPrice);
  const dispatch = useDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    dispatch(setPrice(newValue as number[]));
  };

  return (
    <Setting title="Price range">
      <SliderContainer>
        <CustomSlider
          getAriaLabel={() => "Price range"}
          max={price ? price[1] : undefined}
          min={price ? price[0] : undefined}
          value={curPrice || []}
          onChange={handleChange}
          getAriaValueText={valueText}
          valueLabelDisplay={price ? "on" : "off"}
          valueLabelFormat={(value) => valueText(value)}
        />
      </SliderContainer>
    </Setting>
  );
};
