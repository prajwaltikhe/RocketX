import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const flightList = createAsyncThunk('flights/flightList', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/launches');
  return response.data;
});

export const flightListSlice = createSlice({
  name: 'flight',
  initialState: {
    flights: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [flightList.pending]: (state) => {
      state.pending = true;
      state.flights = [];
      state.error = false;
    },
    [flightList.fulfilled]: (state, action) => {
      state.pending = false;
      state.flights = action.payload;
    },
    [flightList.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { flightListFailure, flightListRequest, flightListSuccess } =
  flightListSlice.actions;

export default flightListSlice.reducer;
