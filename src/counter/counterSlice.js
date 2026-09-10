import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
    cart: [],
  },

  reducers: {
    addChart: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increse: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity++;
      }
    },

    decrese: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.quantity--;
      }
    },
    },
  });

export const {
  addChart,
  increse,
  decrese,
} = counterSlice.actions;

export default counterSlice.reducer;