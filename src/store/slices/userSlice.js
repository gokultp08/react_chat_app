import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { loggedIn: false, currentUser: undefined, allUsers: [] },
  },
  reducers: {
    storeCurrentUser: (state, action) => {
      const newValue = { ...state.value };
      newValue.loggedIn = true;
      newValue.currentUser = action.payload;
      return { ...state, value: newValue };
    },
    storeAllUsers: (state, action) => {
      const newValue = { ...state.value };
      newValue.allUsers = action.payload;
      return { ...state, value: newValue };
    },
    removeAllData: (state) => {
      const newValue = { ...state.value };
      newValue.loggedIn = false;
      newValue.currentUser = undefined;
      newValue.allUsers = [];
      state = { ...state, value: newValue };
    },
  },
});

export const { storeCurrentUser, storeAllUsers, removeAllData } =
  userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
