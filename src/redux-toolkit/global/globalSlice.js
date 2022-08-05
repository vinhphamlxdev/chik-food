import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
    showModal: false,
    productInfo: [],
    currentProduct: "",
  },
  reducers: {
    setBgHeader: (state, action) => {
      state.bgHeader = action.payload;
    },
    setBackTop: (state, action) => {
      state.showBackTop = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});
export const { setBgHeader, setBackTop, setShowModal, setProductInfo } =
  globalSlice.actions;
export default globalSlice.reducer;
