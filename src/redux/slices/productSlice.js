import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (filters) => {
  const response = await axios.get(`${API_BASE_URL}/api/products`, { params: filters });
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default productSlice.reducer;
