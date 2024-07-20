import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
