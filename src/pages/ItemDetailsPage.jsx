import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import {API_BASE_URL} from "../config";

export default function ItemDetailsPage() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Box sx={{ padding: 3, display: "flex", justifyContent: "center" }}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : product ? (
          <Card sx={{ maxWidth: 600, display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
            <CardMedia component="img" height="250" image={product.image} alt={product.name} />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {product.description || "No description available."}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Typography>Product not found</Typography>
        )}
      </Box>
    </>
  );
}
