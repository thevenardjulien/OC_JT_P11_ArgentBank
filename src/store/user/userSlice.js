import { createSlice } from "@reduxjs/toolkit";

const initialState = sessionStorage.getItem("token")
  ? {
      value: {
        email: sessionStorage.getItem("email"),
        firstName: sessionStorage.getItem("firstName"),
        lastName: sessionStorage.getItem("lastName"),
        userName: sessionStorage.getItem("userName"),
        token: sessionStorage.getItem("token"),
      },
    }
  : {
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
