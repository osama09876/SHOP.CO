import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLoggedIn = true; // Changes login state to true
      localStorage.setItem("isLoggedIn", true);
    },
    userLogout: (state) => {
      state.isLoggedIn = false; // Changes login state to false
      localStorage.setItem("isLoggedIn", false);
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
