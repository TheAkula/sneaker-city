import { useAppSelector } from "../../hooks/reduxHooks";
import { selectCart } from "../../redux/reducers/cartReducer";
import { StyledButton, StyledShoppingCart } from "./styled";
import { useEffect, useState } from "react";
import { ProductType } from "../../redux/reducers/productsReducer";
import { LoadingBackdrop } from "../loadingBackdrop";
import { ShoppingCartItem } from "./shoppingCartItem";
import { OrderSummary } from "./styled";
import { Footer } from "../footer";

export const ShoppingCart = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useAppSelector(selectCart);
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    if (cartItems && cartItems.length) {
      setLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json();
        })
        .then((prods) => {
          setProducts(prods);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, []);

  const clickedHandler = () => {};

  let cartProducts = null;
  let totalSummary = 0;
  if (products) {
    cartProducts = cartItems.map((cartItem) => {
      const prod = products.find((p) => p.id === cartItem.id)!;
      totalSummary += prod.price * cartItem.quantity;
      return {
        ...cartItem,
        ...prod,
      };
    });
  }

  return (
    <StyledShoppingCart>
      <div className="cart__inner">
        <div>
          <h1>Your shopping cart</h1>
          <div className="cart__items">
            {cartProducts ? (
              cartProducts.map((cp) => {
                return <ShoppingCartItem key={cp.id} {...cp} />;
              })
            ) : loading ? (
              <LoadingBackdrop />
            ) : null}
          </div>
        </div>
        <OrderSummary>
          <h2>Order Summary</h2>
          <ul>
            <li>
              <span className="li__title">Sub total</span>
              <span className="li__price">{totalSummary.toFixed(2)}RWF</span>
            </li>
            <li>
              <span className="li__title">Delivey fee</span>
              <span className="li__price">0RWF</span>
            </li>
          </ul>
          <div className="line"></div>
          <div className="total-price li__price">
            {totalSummary.toFixed(2)}RWF
          </div>
          <StyledButton type="button" clicked={clickedHandler}>
            Proceed to checkout
          </StyledButton>
        </OrderSummary>
      </div>
      <Footer />
    </StyledShoppingCart>
  );
};
