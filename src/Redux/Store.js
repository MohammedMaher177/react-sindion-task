import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./Slices/AppSlice/appSlice.js";
import { ticketReducer } from "./Slices/TicketsSlice/TicketsSlice.js";
import { titleReducer } from "./Slices/TitlesSlice/TitlesSlice.js";

export const store = configureStore({
  reducer: {
    app: appReducer,
    ticket: ticketReducer,
    title: titleReducer,
  },
});
