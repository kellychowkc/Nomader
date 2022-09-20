import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { preMatching } from "../../api/user";
import {
    getInfoFail,
    getInfoPending,
    getInfoSuccess,
    UserInfoActions,
} from "./userInfoAction";

export function getUserInterest(userId: number) {
    return async function (dispatch: Dispatch<UserInfoActions>) {
        try {
            dispatch(getInfoPending());
            const data = await preMatching(userId);
            console.log("thunk", data);
            // dispatch(getInfoSuccess(data.userId));
        } catch (err: any) {
            dispatch(getInfoFail(err.message));
            return err.message;
        }
    };
}
