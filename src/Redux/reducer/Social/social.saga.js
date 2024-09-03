import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

import { url } from "./../../../../api";
import { getPost, getPostSuccess } from "./social.slice";
import { message } from "antd";

export function* getPostSaga(action) {
  debugger;

  const { feed, page } = action.payload;
  try {
    debugger;

    const req = yield axios.get(`${url}social/feed?type=${feed}&page=${page}`);

    const res = yield req.data;
    debugger;

    yield put(getPostSuccess(res));
    debugger;

    console.log(res);
  } catch (error) {
    console.log(error);
    message.error(error.message);
  }
}

export function* postSaga() {
  yield takeLatest(getPost, getPostSaga);
}
