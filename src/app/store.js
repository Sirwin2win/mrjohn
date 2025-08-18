import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productReducer";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;