import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
