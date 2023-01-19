import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginForm, postLogin } from "../../../api/user";

// export function loginThunk(loginForm: LoginForm, navigate: NavigateFunction) {
//   return async function (dispatch: Dispatch<AuthActions>) {
//     try {
//       dispatch(loginPending());
//       const data = await postLogin(loginForm);
//       window.localStorage.setItem("auth_token", data.token);
//       dispatch(loginSuccess(data.username, data.id, data.isAdmin));
//       navigate("/");
//     } catch (err: any) {
//       dispatch(loginFail(err.message));
//       return err.message;
//     }
//   };
// }

export const loginThunk = createAsyncThunk<
  { id: number; isAdmin: boolean },
  LoginForm
>("login", async (loginForm) => {
  const data = await postLogin(loginForm);
  const { id, isAdmin } = data;
  return { id, isAdmin };
});
