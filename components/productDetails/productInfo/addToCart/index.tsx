import { Button } from "../../../UI/button";
import { useState } from "react";
import { Counter } from "../../../counter";
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
      <Counter curValue={count} increase={addCount} decrease={subtractCount} />
      <Button clicked={onAddToCart} type="button">
        Add to cart
      </Button>
    </StyledAddToCart>
  );
};
