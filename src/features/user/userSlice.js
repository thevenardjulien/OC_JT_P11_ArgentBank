import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default user.reducer;
