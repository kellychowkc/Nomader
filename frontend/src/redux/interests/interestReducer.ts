import { InterestItem, InterestList } from "../state";
import { InterestActions } from "./interestAction";

// const initInterestState: InterestList = {
//     [
//         hiking,

//     ]
// };

// export function authReducer(
//     state: AuthState = initAuthState,
//     action: AuthActions
// ): AuthState {
//     switch (action.type) {
//         case "@@Auth/LOGIN_PENDING":
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 loading: true,
//                 error: undefined,
//             };
//         case "@@Auth/LOGIN_SUCCESS":
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 loading: false,
//                 username: action.username,
//             };
//         case "@@Auth/LOGIN_FAIL":
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 loading: false,
//                 error: action.error,
//             };
//         default:
//             return state;
//     }
// }
