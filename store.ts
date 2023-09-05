import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./src/redux/counter/action";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
