import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { titles } from "../../../Data/DummyData.jsx";
import axiosInstance from "../../../API/axiosInstance.js";
import { apiEndpoints } from "../../../API/apiEndpoints.js";
const initialState = { titles: [], loading: false, error: {}, solved: [] };

export const getTitles = createAsyncThunk(
  "titles/getTitles",
  async (_, { rejectWithValue }) => {
    const endPoint = apiEndpoints.titles.all;

    return await axiosInstance
      .get(endPoint)
      .then(({ data }) => data)
      .catch(({ response }) => rejectWithValue(response.data));
  }
);

const titlesSlice = createSlice({
  name: "TitlesSlice",
  initialState,
  reducers: {
    getSpecTitles: (state, { payload }) => {
      state[payload] = state.titles.filter((title) => title.status.toLowerCase() === payload.toLowerCase());
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTitles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTitles.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.titles = payload;
      })
      .addCase(getTitles.rejected, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.error["titles/getTitles"] = payload;
      });
  },
});
export const { getSpecTitles } = titlesSlice.actions;
export const titleReducer = titlesSlice.reducer;
