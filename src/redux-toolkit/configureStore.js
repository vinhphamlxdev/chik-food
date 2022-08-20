import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import globalReducer from "./global/globalSlice";
const reducer = combineReducers({
  global: globalReducer,
  cart: cartReducer,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
