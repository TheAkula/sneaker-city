import { ProductType } from "../../redux/reducers/productsReducer";
import { ProductSlider } from "./productDetailsSlider";

export const ProductDetails: React.FC<ProductType> = (props) => {
  return (
    <ProductSlider images={Array.from({ length: 4 }).map((_) => props.image)} />
  );
};
