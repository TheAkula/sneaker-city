import {
  ProductType,
  selectLoading,
  setLoading,
} from "../../redux/reducers/productsReducer";
import { ProductSlider } from "./productDetailsSlider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { LoadingBackdrop } from "../loadingBackdrop";
import { ProductInfo } from "./productInfo";
import { StyledProductDetails } from "./styled";

export const ProductDetails: React.FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<ProductType>();
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (router.query.id) {
      dispatch(setLoading(true));
      fetch("https://fakestoreapi.com/products/" + router.query.id)
        .then((res) => {
          return res.json();
        })
        .then((prod) => {
          setProduct(prod);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [router, dispatch]);

  return !loading && product ? (
    <div className="container">
      <StyledProductDetails>
        <ProductSlider
          images={Array.from({ length: 4 }).map((_) => product!.image)}
        />
        <ProductInfo product={product} />
      </StyledProductDetails>
    </div>
  ) : (
    <LoadingBackdrop />
  );
};
