import { configureStore } from "@reduxjs/toolkit";
import flightListReducer from "./flightListSlice";

const store = configureStore({
  reducer: { flightList: flightListReducer },
});

export default store;
