import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserReducer";

export default configureStore({
  reducer: {
    counter: userReducer,
  },
});
