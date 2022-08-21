import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const globalSlice = createSlice({
  name: "cart",
  initialState: {
    showQuickView: false,
    cartItems: [],
    productView: {},
  },
  reducers: {
    setShowQuickView: (state, action) => {
      state.showModal = action.payload;
    },
    setProductView: (state, action) => {
      state.productView = action.payload;
    },
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === newProduct.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity += newProduct.quantity;
      } else {
        state.cartItems.push(newProduct);
      }
    },
    setQuantity: (state, action) => {
      const { id, type } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        if (type === "+") {
          state.cartItems[index].quantity += 1;
        } else {
          if (type === "-") {
            if (state.cartItems[index].quantity > 1) {
              state.cartItems[index].quantity -= 1;
            } else {
              Swal.fire({
                text: "So luong toi thieu phai la 1",
                icon: "error",
              });
            }
          }
        }
      }
    },
    removeFromCart: (state, action) => {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== idNeedToRemove
      );
    },
  },
});
export const {
  setShowQuickView,
  setProductView,
  addToCart,
  setQuantity,
  removeFromCart,
} = globalSlice.actions;
export default globalSlice.reducer;
