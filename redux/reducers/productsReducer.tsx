import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface InitialState {
  items: ProductType[];
  loading: boolean;
}

const initialState: InitialState = {
  items: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/setProducts",
  async (category?: string) => {
    const res = await fetch(
      "https://fakestoreapi.com/products/" +
        (category ? "category/" + category : "")
    );
    const prods = res.json();
    return prods;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.items = action.payload;
        state.loading = false;
      }
    );
  },
});

export const { setLoading } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.items;
export const selectLoading = (state: RootState) => state.products.loading;

export default productsSlice.reducer;
