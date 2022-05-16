import { useAppSelector } from "../../hooks/reduxHooks";
import { selectCart } from "../../redux/reducers/cartReducer";
import { StyledShoppingCart } from "./styled";
import { useEffect, useState } from "react";
import { ProductType } from "../../redux/reducers/productsReducer";
import { LoadingBackdrop } from "../loadingBackdrop";
import { ShoppingCartItem } from "./shoppingCartItem";

export const ShoppingCart = () => {
  const cartItems = useAppSelector(selectCart);
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((prods) => {
        setProducts(prods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledShoppingCart>
      {products ? (
        cartItems.map((cartItem) => {
          const prod = products.find((p) => p.id === cartItem.id)!;
          return <ShoppingCartItem key={cartItem.id} {...cartItem} {...prod} />;
        })
      ) : (
        <LoadingBackdrop />
      )}
    </StyledShoppingCart>
  );
};
