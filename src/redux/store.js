import { configureStore } from '@reduxjs/toolkit';
import flightListReducer from './flightListSlice';

const store = configureStore({
  reducer: {
    flightList: flightListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
