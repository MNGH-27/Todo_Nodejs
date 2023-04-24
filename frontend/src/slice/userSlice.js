import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  },
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    addData: (state, action) => {
      //add sent data to redux
      state.data = {
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading, addData } = userSlice.actions;

export default userSlice.reducer;
