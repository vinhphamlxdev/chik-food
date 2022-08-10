import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
    showModal: false,
    productInfo: {},
    cartList: [],
    increment: true,
    productSell: [],
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
    setProductSell: (state, action) => {
      state.productSell = action.payload;
    },
    // Thêm sp vào giỏ hàng
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
    // xáo sp khỏi giỏ hàng
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
    // Tăng giảm số lượng

    IncQuantity: (state, action) => {
      let cartUpdate = [...state.cartList];
      let index = cartUpdate.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      }
      state.cartList = cartUpdate;
    },
    DecQuantity: (state, action) => {
      let cartUpdate = [...state.cartList];
      let index = cartUpdate.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        if (cartUpdate[index].quantity > 1) {
          cartUpdate[index].quantity -= 1;
        } else {
          swal("Số lượng tối thiểu phải là 1!");
        }
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
  IncQuantity,
  DecQuantity,
  setProductSell,
} = globalSlice.actions;
export default globalSlice.reducer;
