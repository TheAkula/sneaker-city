import { useAppDispatch } from "../../../hooks/reduxHooks";
import {
  decreaseQuantity,
  increaseQuantity,
  Prod,
} from "../../../redux/reducers/cartReducer";
import { ProductType } from "../../../redux/reducers/productsReducer";
import { Counter } from "../../counter";
import { ImageContainer } from "../../imageContainer";
import { StyledShoppingCartItem } from "./styled";

type ShoppingCartItemProps = Prod & ProductType;

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  image,
  title,
  price,
  quantity,
  id,
}) => {
  const dispatch = useAppDispatch();

  const increaseCount = () => {
    dispatch(increaseQuantity(id));
  };

  const decreaseCount = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <StyledShoppingCartItem>
      <div className="image-wrapper">
        <ImageContainer image={image} />
        <div>
          <h4>{title}</h4>
          <span>{price}</span>
        </div>
      </div>
      <Counter
        curValue={quantity}
        increase={increaseCount}
        decrease={decreaseCount}
      />
      <span className="price">{price}</span>
    </StyledShoppingCartItem>
  );
};
