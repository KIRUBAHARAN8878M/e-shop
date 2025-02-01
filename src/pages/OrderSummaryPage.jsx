import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText, Button, Snackbar, Alert } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { checkoutOrder } from "../redux/slices/orderSlice";
import { clearCart } from "../redux/slices/cartSlice";

export default function OrderSummaryPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCheckout = () => {
    dispatch(checkoutOrder(cartItems));
    dispatch(clearCart());
    setSnackbarOpen(true);

    // Navigate to Order History after 2 seconds
    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  return (
    <>
      <Header />
      <Box sx={{ padding: 3, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Order Summary
        </Typography>

        {cartItems.length === 0 ? (
          <Typography>No items in the cart.</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item._id}>
                <ListItemText primary={item.name} secondary={`$${item.price} x ${item.quantity}`} />
              </ListItem>
            ))}
          </List>
        )}

        <Typography variant="h6" sx={{ mt: 2 }}>Total: ${totalPrice.toFixed(2)}</Typography>

        <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/products")}>
          Continue Shopping
        </Button>

        {cartItems.length > 0 && (
          <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} onClick={handleCheckout}>
            Checkout
          </Button>
        )}

        {/* Snackbar for Success Message */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success">
            Order Placed Successfully!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
}
