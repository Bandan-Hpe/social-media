import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    list: [],
    success: false,
    isLoggedin: false,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    sendotp: (state, action) => {
      debugger;
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
    sendOtpSuccess: (state, action) => {
      debugger;
      return {
        ...state,
        success: true,
        list: [action.payload, ...state.list],
      };
    },
    sendOtpFailer: (state) => {
      debugger;
      return {
        ...state,
        success: false,
      };
    },
    verifyOtp: (state, action) => {
      debugger;
      return {
        ...state,
        success: false,
        list: [action.payload, ...state.list],
      };
    },
    verifyOtpSuccess: (state, action) => {
      debugger;
      return {
        ...state,
        success: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        list: [action.payload, ...state.list],
      };
    },
    verifyOtpFailer: (state) => {
      debugger;
      return {
        ...state,
        success: false,
      };
    },
  },
});
export const {
  sendotp,
  sendOtpSuccess,
  verifyOtp,
  verifyOtpSuccess,
  verifyOtpFailer,
} = loginSlice.actions;

export default loginSlice.reducer;
