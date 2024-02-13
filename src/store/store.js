import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: countSlice,
  },
});

export default store;
