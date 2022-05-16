import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../reducers/settingsReducer";
import productsReducer from "../reducers/productsReducer";
import cartReducer from "../reducers/cartReducer";
import chosenReducer from "../reducers/chosenReducer";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    products: productsReducer,
    cart: cartReducer,
    chosen: chosenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
