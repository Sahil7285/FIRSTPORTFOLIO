import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../Redux/blogSlice";

export const store = configureStore({
  reducer: {
    blog: blogReducer, // Keep the name 'blog' as per blogSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;