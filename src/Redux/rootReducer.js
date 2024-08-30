import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./reducer/login.slice";

export const rootReducer = combineReducers({ loginSlice });
