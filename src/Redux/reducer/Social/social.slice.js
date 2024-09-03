import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "social",
  initialState: {
    post: [],
    isLoading: true,
    success: false,
  },
  reducers: {
    getPost(state, action) {
      debugger;

      debugger;
      return {
        ...state,
        isLoading: true,
        post: action.payload,
      };
    },
    getPostSuccess(state, action) {
      debugger;
      return {
        ...state,
        post: action.payload,
        success: true,
        isLoading: false,
      };
    },
  },
});
export const { getPost, getPostSuccess } = FeedSlice.actions;
export default FeedSlice.reducer;
