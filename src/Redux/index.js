import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/reducer";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
