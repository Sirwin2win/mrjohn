import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productReducer";
import detailSlice from "../features/detailReducer";


const store = configureStore({
  reducer: {
    products: productSlice,
    product: detailSlice,

  },
});

export default store;