import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
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
      if (index !== -1) {
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
                text: "Số lượng tối thiểu phải là 1",
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
    // remove all product of cart
    removeAllProduct: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});
export const {
  setShowQuickView,
  setProductView,
  addToCart,
  setQuantity,
  removeFromCart,
  removeAllProduct,
} = globalSlice.actions;
export default globalSlice.reducer;
