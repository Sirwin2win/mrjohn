import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import productDetailSlice from "../features/productDetailSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productDetailSlice,
  },
});

export default store;
