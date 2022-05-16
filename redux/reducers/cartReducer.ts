import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Prod {
  id: number;
  quantity: number;
}

interface InitialState {
  prods: Prod[];
}

const initialState: InitialState = {
  prods: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Prod>) {
      state.prods.push(action.payload);
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const prodIndex = state.prods.findIndex(
        (prod) => prod.id === action.payload
      );
      if (state.prods[prodIndex].quantity !== 1) {
        state.prods[prodIndex].quantity -= 1;
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const prodIndex = state.prods.findIndex(
        (prod) => prod.id === action.payload
      );
      state.prods[prodIndex].quantity += 1;
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.prods;

export default cartSlice.reducer;
