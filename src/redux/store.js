import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import flightListReducer from './flightListSlice';

const store = configureStore({
  reducer: {
    flightList: flightListReducer,
  },
  middleware: [thunk],
});

export default store;
