import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/Slice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
