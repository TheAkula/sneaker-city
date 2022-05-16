import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  prods: number[];
}

const initialState: InitialState = {
  prods: [],
};

const chosenSlice = createSlice({
  name: "chosen",
  initialState: initialState,
  reducers: {
    toggleChosen(state, action: PayloadAction<number>) {
      const prodIndex = state.prods.findIndex((id) => id === action.payload);
      if (prodIndex !== -1) {
        state.prods.splice(prodIndex, 1);
      } else {
        state.prods.push(action.payload);
      }
    },
  },
});

export const { toggleChosen } = chosenSlice.actions;
export const selectChosen = (state: RootState) => state.chosen.prods;

export default chosenSlice.reducer;
