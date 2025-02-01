import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from "../redux/slices/cartSlice";
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header />
      <Box sx={{ padding: 3, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h5">Your Cart</Typography>
        {cartItems.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item._id} sx={{ display: "flex", justifyContent: "space-between" }}>
                <ListItemText primary={item.name} secondary={`$${item.price} x ${item.quantity}`} />
                <Box>
                  <IconButton onClick={() => dispatch(decrementQuantity(item._id))}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography component="span" sx={{ mx: 1 }}>{item.quantity}</Typography>
                  <IconButton onClick={() => dispatch(incrementQuantity(item._id))}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button color="error" onClick={() => dispatch(removeFromCart(item._id))}>
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
        )}

        {cartItems.length > 0 && (
          <>
            <CartSummary />
            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/order-summary")}>
              Place Order
            </Button>
            <Button variant="outlined" color="error" fullWidth sx={{ mt: 2 }} onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </>
        )}
      </Box>
    </>
  );
}
