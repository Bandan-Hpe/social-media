import axios from "axios";
import Cookies from "js-cookie";
import { put, takeLatest } from "redux-saga/effects";
import { url } from "../../../api";
import {
  loginSuccess,
  sendOtpSuccess,
  sendotp,
  verifyOtp,
} from "./login.slice";
import { message } from "antd";
// import { encryptToken } from "../../util/util";

export function* sendOtpSaga(action) {
  try {
    debugger;
    const req = yield axios.post(`${url}auth/sendotp/`, {
      mobileNumber: action.payload,
    });
 
    const res = yield req.data;
    debugger;

    if (res?.isSuccess) {
      message.success(res?.message);
      yield put(sendOtpSuccess(res));
      
    } else {
      debugger;
      message.error(res?.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* verifyOtpSaga(action) {
  try {
    const req = yield axios.post(`${url}/auth/verifyotp`, {
      mobileNumber: `+91${action.payload.mobileNumber}`,
      otp: action.payload.otp,
    });

    const res = yield req.data;
    debugger;

    if (res?.isSuccess) {
      message.success(res?.message);
      // const encryptAccessToken = yield encryptToken(res?.data?.accessToken);
      // const encryptoRefreshToken = yield encryptToken(res?.data?.refreshToken);

      Cookies.set("token", res?.accessToken); // Expires in 1 day
      Cookies.set("refreshToken", res?.refreshToken);
      yield put(
        loginSuccess({
          accessToken: res?.accessToken,
          refreshToken: res.refreshToken,
          ...res,
        })
      );

    } else {
      debugger;
      message.error(res?.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* otpSaga() {
  yield takeLatest(sendotp, sendOtpSaga);
}
export function* verifyOTP() {
  yield takeLatest(verifyOtp, verifyOtpSaga);
}
