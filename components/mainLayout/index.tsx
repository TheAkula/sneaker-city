import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  selectProducts,
  fetchProducts,
  setLoading,
} from "../../redux/reducers/productsReducer";
import { Header } from "../header";
import { Products } from "../products";
import { Settings } from "../settings";
import { StyledMainLayout } from "./styled";

interface MainLayoutProps {
  categories: string[];
  category?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  categories,
  category,
}) => {
  const products = useAppSelector(selectProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  return (
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
  );
};
