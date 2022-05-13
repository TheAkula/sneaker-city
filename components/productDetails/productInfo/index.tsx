import { ProductType } from "../../../redux/reducers/productsReducer";
import { ProductInfoItem } from "./productInfoItem";

interface ProductInfoProps {
  product: ProductType;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <ProductInfoItem title="Description">{product.description}</ProductInfoItem>
  );
};
