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
      const propertiesToAdd = [
        "email",
        "firstName",
        "lastName",
        "userName",
        "token",
      ];
      propertiesToAdd.forEach((property) => {
        sessionStorage.setItem(property, action.payload[property]);
      });
    },
    logout: (state) => {
      state.value = "";
      const propertiesToRemove = [
        "email",
        "firstName",
        "lastName",
        "userName",
        "token",
      ];
      propertiesToRemove.forEach((property) => {
        sessionStorage.removeItem(property);
      });
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
