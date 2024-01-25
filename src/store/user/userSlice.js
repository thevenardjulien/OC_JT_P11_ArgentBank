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
    login: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem("email", action.payload.email);
      sessionStorage.setItem("firstName", action.payload.firstName);
      sessionStorage.setItem("lastName", action.payload.lastName);
      sessionStorage.setItem("userName", action.payload.userName);
      sessionStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.value = "";
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("lastName");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("token");
    },
    updateUserName: (state, action) => {
      state.value = { ...state.value, userName: action.payload };
      sessionStorage.removeItem("userName");
      sessionStorage.setItem("userName", action.payload);
    },
  },
});

export const { login, logout, updateUserName } = userSlice.actions;

export default userSlice.reducer;
