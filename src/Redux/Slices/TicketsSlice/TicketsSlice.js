import { createSlice } from "@reduxjs/toolkit";
import { tickets, titles } from "../../../Data/DummyData.jsx";
const initialState = { tickets, titles };

const ticketsSlice = createSlice({
  name: "TicketsSlice",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const ticketReducer = ticketsSlice.reducer;
