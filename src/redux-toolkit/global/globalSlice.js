import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
    showModal: false,
    productInfo: {},
    cartList: [],
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
    setCartList: (state, action) => {
      // chưa có thì push vào, đã có tăng số lượng
      let index = state.cartList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      } else {
        // state.cartList.push(action.payload);
        state.cartList = [...state.cartList, action.payload];
      }
    },
    removeCartItem: (state, action) => {
      let cartUpdate = [...state.cartList];
      console.log(cartUpdate);
      let index = cartUpdate.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        cartUpdate.splice(index, 1);
      }
      state.cartList = cartUpdate;
    },
  },
});
export const {
  setBgHeader,
  setBackTop,
  setShowModal,
  setProductInfo,
  setCartList,
  removeCartItem,
} = globalSlice.actions;
export default globalSlice.reducer;
