import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductType } from "./productsReducer";

export type Rate = "bad" | "best" | null;

interface InitialState {
  priceRange: number[] | null;
  rate: Rate;
  curPrice: number[] | null;
}

const initialState: InitialState = {
  priceRange: null,
  rate: null,
  curPrice: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setPrice(state, action: PayloadAction<InitialState["curPrice"]>) {
      state.curPrice = action.payload;
    },
    initPrice(state, action: PayloadAction<ProductType[]>) {
      const sorted = [...action.payload].sort((a, b) => a.price - b.price);
      const priceRange = [sorted[0].price, sorted.at(-1)!.price];
      state.priceRange = priceRange;
      state.curPrice = priceRange;
    },
    setRate(state, action: PayloadAction<Rate>) {
      state.rate = action.payload;
    },
  },
});

export const { setPrice, setRate, initPrice } = settingsSlice.actions;

export const selectRate = (state: RootState) => state.settings.rate;
export const selectPrice = (state: RootState) => state.settings.priceRange;
export const selectCurPrice = (state: RootState) => state.settings.curPrice;

export default settingsSlice.reducer;
