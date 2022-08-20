import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
    increment: true,
    blogItem: {},
    loadingScreen: true,
  },
  reducers: {
    setBgHeader: (state, action) => {
      state.bgHeader = action.payload;
    },
    setLoadingScreen: (state, action) => {
      state.loadingScreen = action.payload;
    },
    setBackTop: (state, action) => {
      state.showBackTop = action.payload;
    },

    // blog
    setBlogItem: (state, action) => {
      state.blogItem = action.payload;
    },
  },
});
export const { setBgHeader, setBackTop, setBlogItem, setLoadingScreen } =
  globalSlice.actions;
export default globalSlice.reducer;
