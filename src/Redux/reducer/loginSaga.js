import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { url } from "../../../api";
import {
  sendOtpSuccess,
  sendotp,
  verifyOtp,
  verifyOtpSuccess,
} from "./login.slice";
import { message } from "antd";

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
    } else {
      debugger;
      message.error(res?.message);
    }

    yield put(sendOtpSuccess(res));
  } catch (error) {
    console.log(error);
  }
}

export function* verifyOtpSaga(action) {
  try {
    const req = yield axios.post(`${url}/auth/verifyotp`, {
      mobileNumber: action.payload.mobileNumber,
      otp: action.payload.otp,
    });

    const res = yield req.data;
    debugger;

    if (res?.isSuccess) {
      message.success(res?.message);
    } else {
      debugger;
      message.error(res?.message);
    }
    yield put(
      verifyOtpSuccess({
        accessToken: res?.data?.accessToken,
        refreshToken: res?.data?.refreshToken,
        ...res,
      })
    );
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
