import { createSlice } from "@reduxjs/toolkit";

export const statusOptions = {
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
    onLogout: (state, action) => {
      state.status = statusOptions.notAuthenticated;
      state.user = {};
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
