import {
    Action,
    combineReducers,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";

import type { AuthState } from "./state";
import { authReducer } from "./auth/authReducer";

export interface RootState {
    auth: AuthState;
}

export type RootActions = Action<any>;

export type RootThunkDispatch = ThunkDispatch<RootState, null, RootActions>;

const rootReducer = combineReducers<RootState, RootActions>({
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
