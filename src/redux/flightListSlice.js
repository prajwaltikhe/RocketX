import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const flightList = createAsyncThunk('flights/flightList', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/launches');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const flightListSlice = createSlice({
  name: 'flight',
  initialState: {
    flights: [],
    pending: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(flightList.pending, (state) => {
        state.pending = true;
        state.flights = [];
        state.error = false;
      })
      .addCase(flightList.fulfilled, (state, action) => {
        state.pending = false;
        state.flights = action.payload;
      })
      .addCase(flightList.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default flightListSlice.reducer;
