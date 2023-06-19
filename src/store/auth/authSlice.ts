import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    name: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      //     state.email=payload.email;
      //    state.displayName=payload.displayName;
      //    state. errorMessage=null;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.email = null;
      // state.displayName=null
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },
    createUser: (state, { payload }) => {
      state.uid = payload.uid;
      state.email = payload.email;
      state.name = payload.name;
    },
  },
});
export const { login, logout, checkingCredentials, createUser } =
  authSlice.actions;
