import { createSlice } from "@reduxjs/toolkit";
import users from "../../jsonusers/users.json";

const initialState = { users: [], currentUser: null, isLoggedIn: false };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    /*login: (state, action) => {
      const { username, password } = action.payload;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
      } else {
        throw new Error("Invalid username or password");
      }
    },*/
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUsers, login, logout } = userSlice.actions;

export default userSlice.reducer;
