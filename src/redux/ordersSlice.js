import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const axios = require("axios");

// Add ORDER
export const addNewOrder = createAsyncThunk(
  "orders/addOrder",
  async (newOrder) => {
    const response = await fetch(
      "https://sheltered-caverns-74517.herokuapp.com/order",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newOrder }),
      }
    )
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Order Successfully added");
        }
      });
    return response;
  }
);

//Get Orders
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return await axios
    .get("https://polar-savannah-40370.herokuapp.com/dashboard/orders")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("from axios error", error);
    });
});

// DELETE ORDER
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id) => {
    return await fetch(
      `https://polar-savannah-40370.herokuapp.com/dashboard/orders/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Order Deleted");
          const orders = useSelector((state) => state.orders.orders);
          const remainingOrders = orders.filter((order) => order._id !== id);
          return remainingOrders;
        }
      });
  }
);

// Order Status

export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async (id) => {
    return await fetch(
      `https://polar-savannah-40370.herokuapp.com/dashboard/orders/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Shipped" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status changed to shipped");
        }
      });
  }
);

// Then, handle actions in your reducers:
const ordersSlice = createSlice({
  name: "orders",
  initialState: { orders: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Orders
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = [...action.payload];
    });

    // Delete Order
    builder.addCase(deleteOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = [...action.payload];
    });
    // Update  Order Status
    builder.addCase(updateOrderStatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = [...action.payload];
    });
    // Add  Order
    builder.addCase(addNewOrder.pending, (state, action) => {
      state.loading = true;
      console.log(state.loading);
    });
    builder.addCase(addNewOrder.fulfilled, (state, action) => {
      state.loading = false;
      console.log(state.loading);
    });
  },
});

export default ordersSlice.reducer;
