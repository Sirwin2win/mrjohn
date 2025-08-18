import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { data } from "react-router-dom";
import axios from "axios";

const url = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      //   const branchId = thunkAPI.getState().auth.user.branchId;
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    // status: "idle", // 'idle'; 'loading', 'succeeded'
    //error: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.error, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message;
      }),
});
// export default productsSlice;
// export const { reset } = branchSlice.actions
export default productsSlice.reducer;
