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

  return price && curPrice ? (
    <Setting title="Price range">
      <SliderContainer>
        <CustomSlider
          getAriaLabel={() => "Price range"}
          max={price[1]}
          min={price[0]}
          value={curPrice}
          onChange={handleChange}
          getAriaValueText={valueText}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => valueText(value)}
        />
      </SliderContainer>
    </Setting>
  ) : null;
};
