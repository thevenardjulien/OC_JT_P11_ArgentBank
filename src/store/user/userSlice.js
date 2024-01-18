import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connectedUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { connectedUser } = userSlice.actions;

export default userSlice.reducer;
