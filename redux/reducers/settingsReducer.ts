import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type Rate = "bad" | "best" | null;

interface InitialState {
  priceRange: [number, number];
  rate: Rate;
}

const initialState: InitialState = {
  priceRange: [0, 120000],
  rate: null,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setPrice(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setRate(state, action: PayloadAction<Rate>) {
      state.rate = action.payload;
    },
  },
});

export const { setPrice, setRate } = settingsSlice.actions;

export const selectRate = (state: RootState) => state.settings.rate;

export default settingsSlice.reducer;
