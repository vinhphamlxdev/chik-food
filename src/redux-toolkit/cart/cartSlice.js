import { createSlice } from "@reduxjs/toolkit";
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
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((item) => item === id);
      if (index >= 0) {
        state.cartItems[index].quantity += quantity;
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
