import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../redux/slices/orderSlice";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Header from "../components/Header";

export default function OrdersPage() {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Box sx={{ padding: 2, maxWidth: 900, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Order History
        </Typography>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : orders.length === 0 ? (
          <Typography>No orders placed yet.</Typography>
        ) : (
          orders.map((order, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 2,
                padding: 2,
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">Order #{index + 1}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Placed on: {order.formattedDate}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Total: <strong>${order.totalPrice.toFixed(2)}</strong>
                </Typography>
              </CardContent>

              {/* Order Items List */}
              <Box sx={{ flex: 2 }}>
                <List dense>
                  {order.items.map((item, i) => (
                    <ListItem
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        secondary={`$${item.price} x ${item.quantity}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Card>
          ))
        )}
      </Box>
    </>
  );
}
