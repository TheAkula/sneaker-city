import { ProductType } from "../../redux/reducers/productsReducer";
import { StyledProducts, ProductsGrid } from "./styled";
import { Product } from "./product";
import { useRouter } from "next/router";
import { Footer } from "../footer";

interface ProductsProps {
  products: ProductType[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  const router = useRouter();

  return (
    <StyledProducts>
      <h2>
        {router.query.category
          ? router.query.category[0].toUpperCase() +
            router.query.category.slice(1)
          : "All products"}
      </h2>
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

      <Footer />
    </StyledProducts>
  );
};
