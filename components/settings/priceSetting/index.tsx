import { useState } from "react";
import { Setting } from "../setting";
import { SliderContainer, CustomSlider } from "./styled";

function valueText(value: number) {
  return value ? value + ",000RWF" : "0RWF";
}

export const PriceSetting = () => {
  const [value, setValue] = useState([0, 120]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Setting title="Price range">
      <SliderContainer>
        <CustomSlider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          getAriaValueText={valueText}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => valueText(value)}
        />
      </SliderContainer>
    </Setting>
  );
};
