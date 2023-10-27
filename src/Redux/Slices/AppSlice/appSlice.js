import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarCollapsed: false,
  // navWidth: "calc(100% - 250px)",
  navWidth: "100%",
};
const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarCollapsed = !state.sideBarCollapsed;
      state.navWidth = state.sideBarCollapsed ? "calc(100% - 250px)" : "100%";
    },
  },
});
export const appReducer = appSlice.reducer;
export const { toggleSideBar } = appSlice.actions;
