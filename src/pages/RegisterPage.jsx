import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "450px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", password: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      setOpenSnackbar(true);
      setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 sec
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", fontSize: "clamp(2rem, 5vw, 2.5rem)" }}
        >
          Sign Up
        </Typography>
        {error && <Typography color="error" sx={{ textAlign: "center" }}>{error}</Typography>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              error={!!errors.name}
              helperText={errors.name}
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              required
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={!!errors.email}
              helperText={errors.email}
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              error={!!errors.password}
              helperText={errors.password}
              name="password"
              type="password"
              placeholder="••••••"
              autoComplete="new-password"
              required
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="/login" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Card>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Successfully registered! 
        </Alert>
      </Snackbar>
    </Box>
  );
}
