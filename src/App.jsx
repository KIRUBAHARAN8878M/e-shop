import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPassword.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrderSummaryPage from "./pages/OrderSummaryPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect "/" to "/login" */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<ItemDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch all invalid routes */}
      </Routes>
    </Router>
  );
}

export default App;
