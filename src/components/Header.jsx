import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items); 

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#f5f5f5", color: "#000" }}> 
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", color: "#000" }}
          onClick={() => navigate("/products")}
        >
          E-Shop
        </Typography>
        <div>
          <IconButton onClick={() => navigate("/cart")}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon sx={{ color: "#000" }} />
            </Badge>
          </IconButton>
          <IconButton onClick={() => navigate("/orders")}>
            <ReceiptIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton onClick={() => navigate("/login")}> 
            <LogoutIcon sx={{ color: "#000" }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
