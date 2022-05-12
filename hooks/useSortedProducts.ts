import { ProductType } from "../redux/reducers/productsReducer";
import { useAppSelector } from "./reduxHooks";
import { selectCurPrice, selectRate } from "../redux/reducers/settingsReducer";

export const useSortedProducts = (products: ProductType[]) => {
  const rate = useAppSelector(selectRate);
  const curPrice = useAppSelector(selectCurPrice);

  let prods = [...products];

  if (curPrice) {
    prods = prods.filter(
      (prod) => prod.price >= curPrice[0] && prod.price <= curPrice[1]
    );
  }

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

  return prods;
};
