import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
    showModal: false,
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
  },
});
export const { setBgHeader, setBackTop, setShowModal } = globalSlice.actions;
export default globalSlice.reducer;
