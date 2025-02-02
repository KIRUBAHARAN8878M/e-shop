import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { setCategory } from "../redux/slices/categorySlice"; 
import { Box, Grid, TextField, MenuItem, Paper, Typography } from "@mui/material";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";

export default function HomePage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts({ search, category: selectedCategory }));
  }, [dispatch, search, selectedCategory]);

  return (
    <>
      <Header />
      <Box sx={{ padding: 3 }}>
        {/* Responsive Filters */}
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 3, maxWidth: 400, mx: "auto" }}>
          <TextField
            label="Search"
            fullWidth
            size="small"
            onChange={(e) => setSearch(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            select
            label="Category"
            fullWidth
            value={selectedCategory}
            size="small"
            onChange={(e) => dispatch(setCategory(e.target.value))} 
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Laptops">Laptops</MenuItem>
            <MenuItem value="Mobiles">Mobiles</MenuItem>
            <MenuItem value="Shirts">Shirts</MenuItem>
          </TextField>
        </Paper>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {items.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ItemCard product={product} /> 
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
