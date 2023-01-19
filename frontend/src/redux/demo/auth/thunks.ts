import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginForm, postLogin } from "../../../api/user";

export const loginThunk = createAsyncThunk<
  { id: number; isAdmin: boolean },
  LoginForm
>("login", async (loginForm) => {
  const data = await postLogin(loginForm);
  const { id, isAdmin } = data;
  return { id, isAdmin };
});
