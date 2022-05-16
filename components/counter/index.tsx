import { MinusImage } from "../svgComponents/minus";
import { PlusImage } from "../svgComponents/plus";
import { StyledCounter } from "./styled";

interface CounterProps {
  curValue: number;
  increase: () => void;
  decrease: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  curValue,
  increase,
  decrease,
}) => {
  return (
    <StyledCounter>
      <div className="counter__control" onClick={decrease}>
        <MinusImage />
      </div>
      <div className="counter__output">
        <span>{curValue}</span>
      </div>
      <div className="counter__control" onClick={increase}>
        <PlusImage />
      </div>
    </StyledCounter>
  );
};
