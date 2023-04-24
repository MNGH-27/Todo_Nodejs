import { configureStore } from "@reduxjs/toolkit";

//reducers
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
