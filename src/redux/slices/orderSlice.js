import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to checkout order
export const checkoutOrder = createAsyncThunk("orders/checkoutOrder", async (cartItems) => {
  const response = await axios.post("http://localhost:5000/api/orders", { items: cartItems });
  return response.data;
});

// Async action to fetch order history
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    const response = await axios.get("http://localhost:5000/api/orders");
    return response.data;
  });

const orderSlice = createSlice({
  name: "orders",
  initialState: { orders: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkoutOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default orderSlice.reducer;
