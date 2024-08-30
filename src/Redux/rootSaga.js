import { all, fork } from "redux-saga/effects";
import { otpSaga, verifyOTP } from "./reducer/loginSaga";

export default function* rootSaga() {
  yield all([fork(otpSaga), fork(verifyOTP)]);
}
