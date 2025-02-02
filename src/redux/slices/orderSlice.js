import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config";


export const checkoutOrder = createAsyncThunk(
  "orders/checkoutOrder",
  async (cartItems, { getState }) => {
    const token = getState().auth.token || localStorage.getItem("token");

    const response = await axios.post(
      `${API_BASE_URL}/api/orders`,
      { items: cartItems }, 
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  }
);


export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { getState }) => {
    const token = getState().auth.token || localStorage.getItem("token"); 

    const response = await axios.get(`${API_BASE_URL}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` }, 
    });

    return response.data;
  }
);


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
