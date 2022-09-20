import {
    combineReducers,
    ThunkDispatch,
    configureStore,
} from "@reduxjs/toolkit";

import type { AuthState } from "./state";
import { authReducer } from "./auth/authReducer";
import { AuthActions } from "./auth/authAction";

import type { ManageUserState } from "./state";
import { manageUserReducer } from "./manageUser/manageUserReducer";
import { ManageUserActions } from "./manageUser/manageUserAction";
import logger from "redux-logger";



export interface RootState {
    auth: AuthState;
    manageUser: ManageUserState
}

export type RootActions = AuthActions;

export type IRootActions = AuthActions | ManageUserActions

export type RootThunkDispatch = ThunkDispatch<RootState, null, RootActions>;

const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    manageUser: manageUserReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
