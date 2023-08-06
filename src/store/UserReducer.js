import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { loggedIn: false, currentUser: undefined, allUsers: [] },
};

function userReducer(state = initialState, action) {
  if (action.type === UserActions.STORE_CURRENT_USER) {
    const newValue = { ...state.value };
    newValue.loggedIn = true;
    newValue.currentUser = action.payload;
    return {
      ...state,
      value: newValue,
    };
  } else if (action.type === UserActions.STORE_ALL_USERS) {
    const newValue = { ...state.value };
    newValue.allUsers = action.payload;
    return {
      ...state,
      value: newValue,
    };
  } else if (action.type === UserActions.REMOVE_ALL_DATA) {
    const newValue = { ...state.value };
    newValue.allUsers = action.payload;
    return {
      ...state,
      value: newValue,
    };
  }
  return state;
}

const UserActions = {
  STORE_CURRENT_USER: "storeCurrentUser",
  STORE_ALL_USERS: "storeAllUsers",
  REMOVE_ALL_DATA: "removeAllData",
};

export { userReducer, UserActions };

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     value: {
//       currentUser: undefined,
//       allUsers: [],
//     },
//   },
//   reducers: {
//     storeCurrentUser: (state) => {
//       state.value += 1;
//     },
//     storeAllUsers: (state) => {
//       state.value -= 1;
//     },
//     removeAllData: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { storeCurrentUser, storeAllUsers, removeAllData } = userSlice.actions;

// export default userSlice.reducer;
