import {
    combineReducers,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";

import type { AuthState } from "./state";
import { authReducer } from "./auth/authReducer";
import { AuthActions } from "./auth/authAction";

export interface RootState {
    auth: AuthState;
}

export type RootActions = AuthActions;

export type RootThunkDispatch = ThunkDispatch<RootState, null, RootActions>;

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
