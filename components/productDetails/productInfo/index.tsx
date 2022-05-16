import { ProductType } from "../../../redux/reducers/productsReducer";
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
    </StyledProductInfo>
  );
};
