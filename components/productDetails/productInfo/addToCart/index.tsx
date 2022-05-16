import { Button } from "../../../UI/button";
import { useState } from "react";
import { MinusImage } from "../../../svgComponents/minus";
import { PlusImage } from "../../../svgComponents/plus";
import { StyledAddToCart } from "./styled";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { addToCart } from "../../../../redux/reducers/cartReducer";
import { useRouter } from "next/router";

interface AddToCartProps {
  id: number;
}

export const AddToCart: React.FC<AddToCartProps> = ({ id }) => {
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const addCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAddToCart = () => {
    dispatch(addToCart({ id: id, quantity: count }));
    router.push("/cart");
  };

  return (
    <StyledAddToCart>
      <div className="counter">
        <div className="counter__control" onClick={subtractCount}>
          <MinusImage />
        </div>
        <div className="counter__output">
          <span>{count}</span>
        </div>
        <div className="counter__control" onClick={addCount}>
          <PlusImage />
        </div>
      </div>
      <Button clicked={onAddToCart} type="button">
        Add to cart
      </Button>
    </StyledAddToCart>
  );
};
