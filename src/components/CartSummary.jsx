import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6">Cart Summary</Typography>
      <Typography>Total Items: {cartItems.length}</Typography>
      <Typography>Total Price: ${totalPrice.toFixed(2)}</Typography>
    </Box>
  );
}
