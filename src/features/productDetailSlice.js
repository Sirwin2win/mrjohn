import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState = {
  data: 0,
  status: "idle", // 'Loading', 'succeeded','error'
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    return data.json();
  }
);

const productDetailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "error";
        state.data = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;
