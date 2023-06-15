import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
  },
  reducers: {
    login: (state, { payload }) => {
        state.status='authenticated';
        state.uid=payload.uid;
    //     state.email=payload.email; 
    //    state.displayName=payload.displayName;
    //    state. errorMessage=null;

       
    },

    logout: (state, { payload }) => {
        state.status='not-authenticated';
        state.email=null; 
        // state.displayName=null

    },

    checkingCredentials: (state) =>{
        state.status = 'checking';
      }
  },
});
export const {login, logout, checkingCredentials}=authSlice.actions;
