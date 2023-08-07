import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import appReducer from "./slices/appSlice";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: [thunk],
});
