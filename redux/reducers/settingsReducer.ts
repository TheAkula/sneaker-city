import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  brands: string[];
  priceRange: [number, number];
  sizes: number[];
}

const initialState: InitialState = {
  brands: [],
  priceRange: [0, 120000],
  sizes: [],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setBrands(state, action: PayloadAction<string>) {
      const brandIndex = state.brands.findIndex((b) => b === action.payload);
      console.log(brandIndex);
      if (brandIndex === -1) {
        state.brands.push(action.payload);
      } else {
        state.brands.splice(brandIndex, 1);
      }
    },
    setSizes(state, action: PayloadAction<number>) {
      const sizeIndex = state.sizes.findIndex((b) => b === action.payload);
      if (sizeIndex === -1) {
        state.sizes.push(action.payload);
      } else {
        delete state.sizes[sizeIndex];
      }
    },
  },
});

export const { setBrands, setSizes } = settingsSlice.actions;
export default settingsSlice.reducer;
