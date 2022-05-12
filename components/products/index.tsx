import { ProductType } from "../../redux/reducers/productsReducer";
import { StyledProducts, ProductsGrid } from "./styled";
import { Product } from "./product";
import { useRouter } from "next/router";
import { Footer } from "../footer";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectRate } from "../../redux/reducers/settingsReducer";

interface ProductsProps {
  products: ProductType[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  const rate = useAppSelector(selectRate);
  const router = useRouter();

  let prods = [...products];

  if (rate) {
    prods = prods.sort((a, b) => {
      if (a.rating.rate < b.rating.rate) {
        return 1;
      }
      if (a.rating.rate === b.rating.rate) {
        return b.rating.count - a.rating.count;
      }
      return -1;
    });
  }

  if (rate === "bad") {
    prods = prods.reverse();
  }

  return (
    <StyledProducts>
      <h2>
        {router.query.category
          ? (
              (router.query.category[0].toUpperCase() +
                router.query.category.slice(1)) as string
            ).replace(/%20/g, " ")
          : "All Products"}
      </h2>
      <ProductsGrid>
        {prods.map((prod) => {
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
