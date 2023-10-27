import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./Slices/AppSlice/appSlice.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
