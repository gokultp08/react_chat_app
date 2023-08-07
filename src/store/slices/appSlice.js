import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setLoading } = appSlice.actions;

export const selectApp = (state) => state.app;

export default appSlice.reducer;
