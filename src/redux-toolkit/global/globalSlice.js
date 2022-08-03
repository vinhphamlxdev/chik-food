import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    bgHeader: false,
    showBackTop: false,
  },
  reducers: {
    setBgHeader: (state, action) => {
      state.bgHeader = action.payload;
    },
    setBackTop: (state, action) => {
      state.showBackTop = action.payload;
    },
  },
});
export const { setBgHeader, setBackTop } = globalSlice.actions;
export default globalSlice.reducer;
