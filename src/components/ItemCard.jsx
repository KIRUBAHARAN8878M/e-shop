import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", maxWidth: 280, mx: "auto" }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/product/${product._id}`)} // Redirect to Item Details
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2">${product.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 1 }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
