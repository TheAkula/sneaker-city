import { Setting } from "../setting";
import { RateInput } from "./rateInput";

export const RateSettings = () => {
  return (
    <Setting title="Rate">
      <RateInput type="bad">Worst</RateInput>
      <RateInput type="best">Best</RateInput>
      <RateInput type={null}>Without filter</RateInput>
    </Setting>
  );
};
