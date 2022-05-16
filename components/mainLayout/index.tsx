import { useEffect } from "react";
import React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  selectProducts,
  fetchProducts,
  setLoading,
  selectLoading,
} from "../../redux/reducers/productsReducer";
import { initPrice } from "../../redux/reducers/settingsReducer";
import { Header } from "../header";
import { LoadingBackdrop } from "../loadingBackdrop";
import { Products } from "../products";
import { Settings } from "../settings";
import { StyledMainLayout } from "./styled";

interface MainLayoutProps {
  categories: string[];
  category?: string;
}

const Main: React.FC<MainLayoutProps> = ({ categories, category }) => {
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchProducts(category));
  }, [category, dispatch]);

  useEffect(() => {
    if (products && products.length) {
      dispatch(initPrice(products));
    }
  }, [products, dispatch]);

  return (
    <>
      <div>
        <Header categories={categories} />
        <main>
          <div className="container">
            <StyledMainLayout>
              <Settings />
              {products.length ? <Products products={products} /> : null}
            </StyledMainLayout>
          </div>
        </main>
      </div>
      {loading && <LoadingBackdrop />}
    </>
  );
};

export const MainLayout = React.memo(Main);
