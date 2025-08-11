import { createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../../config";


// Check if user is logged in based on token existence
const storedToken = localStorage.getItem(ACCESS_TOKEN);

const initialState = {
  loggedIn: storedToken !== null,
  token: storedToken,
  otp_ready:false,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.token = action.payload;
      localStorage.setItem(ACCESS_TOKEN, action.payload); // Save token
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      localStorage.removeItem(ACCESS_TOKEN); // Remove token
      localStorage.removeItem(REFRESH_TOKEN); // Remove token
      window.location.href = '/login'
    },
    now_otp_ready(state) {
        state.otp_ready = true
    },
    otp_not_ready(state) {
        state.otp_ready = false
    }
  },
});

export const { login, logout , now_otp_ready, otp_not_ready } = userInfoSlice.actions;
export default userInfoSlice.reducer;