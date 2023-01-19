import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks";

// interface for state
export interface AuthState {
  isAuthenticated: boolean | null;
  loading: boolean;
  username?: string;
  id?: number;
  error?: string;
  isAdmin?: boolean;
  profile?: string;
}

// init
const initialState: AuthState = {
  isAuthenticated: null,
  loading: false,
};

// createSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.username = action.meta.arg.username;
      state.id = action.payload.id;
      state.isAdmin = action.payload.isAdmin;
    });
  },
});
