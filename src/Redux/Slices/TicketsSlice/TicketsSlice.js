import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { titles } from "../../../Data/DummyData.jsx";
import axiosInstance from "../../../API/axiosInstance.js";
import { apiEndpoints } from "../../../API/apiEndpoints.js";

const initialState = { tickets: [], loading: {}, error: {} };

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

export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const endPoint = apiEndpoints.tickets.all;
    return await axiosInstance
      .post(endPoint, data)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((response) => {
        console.log(response);
        return rejectWithValue(response);
      });
  }
);

const ticketsSlice = createSlice({
  name: "TicketsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.loading["tickets/getTickets"] = true;
      })
      .addCase(getTickets.fulfilled, (state, { payload }) => {
        state.loading["tickets/getTickets"] = false;
        state.tickets = payload;
      })
      .addCase(getTickets.rejected, (state, { payload }) => {
        state.loading["tickets/getTickets"] = false;
        state.error["tickets/getTickets"] = payload;
      })
      .addCase(
        addTicket.pending,
        (state) => (state.loading["tickets/addTicket"] = true)
      )
      .addCase(addTicket.fulfilled, (state, { payload }) => {
        state.loading["tickets/addTicket"] = false;
        console.log(payload);
      })
      .addCase(addTicket.rejected, (state, { payload }) => {
        state.loading["tickets/addTicket"] = false;
        console.log(payload);
      });
  },
});

export const ticketReducer = ticketsSlice.reducer;
