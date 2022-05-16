import { ProductType } from "../../../redux/reducers/productsReducer";
import { AddToCart } from "./addToCart";
import { ProductInfoItem } from "./productInfoItem";
import { StyledProductInfo } from "./styled";

interface ProductInfoProps {
  product: ProductType;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <StyledProductInfo>
      <ProductInfoItem title="Description">
        {product.description}
      </ProductInfoItem>
      <AddToCart id={product.id} />
    </StyledProductInfo>
  );
};
