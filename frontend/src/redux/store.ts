import {
    combineReducers,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";

import type { AuthState, UserInfoState } from "./state";
import { authReducer } from "./auth/authReducer";
import { AuthActions } from "./auth/authAction";
import { UserInfoActions } from "./userInfo/userInfoAction";
import { userInfoReducer } from "./userInfo/userInfoReducer";

export interface RootState {
    auth: AuthState;
    userInfo: UserInfoState;
}

export type RootActions = AuthActions | UserInfoActions;

export type RootThunkDispatch = ThunkDispatch<RootState, null, RootActions>;

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    userInfo: userInfoReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
