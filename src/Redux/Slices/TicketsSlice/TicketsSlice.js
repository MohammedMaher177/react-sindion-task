import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { titles } from "../../../Data/DummyData.jsx";
import axiosInstance from "../../../API/axiosInstance.js";
import { apiEndpoints } from "../../../API/apiEndpoints.js";
const initialState = { tickets: [], loading: false , error: {}};

export const getTickets = createAsyncThunk(
  "tickets/getTickets",
  async (_, { rejectWithValue }) => {
    const endPoint = apiEndpoints.tickets.all;

    return await axiosInstance
      .get(endPoint)
      .then(({ data }) => data)
      .catch(({ response }) => rejectWithValue(response.data));
  }
);

const ticketsSlice = createSlice({
  name: "TicketsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTickets.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.tickets = payload;
      })
      .addCase(getTickets.rejected, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.error["tickets/getTickets"] = payload;
      });
  },
});

export const ticketReducer = ticketsSlice.reducer;
