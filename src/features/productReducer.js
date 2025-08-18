import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("getProduct", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default productSlice.reducer;