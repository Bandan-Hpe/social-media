import { all, fork } from "redux-saga/effects";
import { otpSaga, verifyOTP } from "./reducer/Login/loginSaga";
import { postSaga } from "./reducer/Social/social.saga";

export default function* rootSaga() {
  yield all([fork(otpSaga), fork(verifyOTP), fork(postSaga)]);
}
