import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./reducer/Login/login.slice";
import FeedSlice from "./reducer/Social/social.slice";

export const rootReducer = combineReducers({ loginSlice, FeedSlice });
