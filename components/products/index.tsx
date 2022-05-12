import { ProductType } from "../../redux/reducers/productsReducer";
import { StyledProducts, ProductsGrid } from "./styled";
import { Product } from "./product";
import { useRouter } from "next/router";

interface ProductsProps {
  products: ProductType[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  const router = useRouter();

  return (
    <StyledProducts>
      <h2>{router.query.category || "All products"}</h2>
      <ProductsGrid>
        {products.map((prod) => {
          return (
            <Product
              id={prod.id}
              title={prod.title}
              imageUrl={prod.image}
              key={prod.id}
              price={prod.price}
            />
          );
        })}
      </ProductsGrid>
    </StyledProducts>
  );
};
