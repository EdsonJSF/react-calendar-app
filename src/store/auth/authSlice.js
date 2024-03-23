import { createSlice } from "@reduxjs/toolkit";

const statusOptions = {
  authenticated: "authenticated",
  checking: "checking",
  notAuthenticated: "not-authenticated",
};

const initialState = {
  status: statusOptions.notAuthenticated,
  user: {},
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = statusOptions.checking;
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, action) => {
      state.status = statusOptions.authenticated;
      state.user = action.payload;
      state.errorMessage = undefined;
    },
  },
});

export const { checking, onLogin } = authSlice.actions;
