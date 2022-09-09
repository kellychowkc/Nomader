import { AuthState } from "../state";
// import { AuthActions } from "./actions";

const initAuthState: AuthState = {
    isAuthenticated: null,
};

export function authReducer(state: AuthState = initAuthState): AuthState {
    return state;
}
