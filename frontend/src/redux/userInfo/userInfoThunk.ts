import { Dispatch } from "react";
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
            const data: any = await preMatching(userId);
            const interest = data.interest;
            dispatch(getInfoSuccess(interest));
            console.log("thunk", data);
            return data;
        } catch (err: any) {
            dispatch(getInfoFail(err.message));
            return err.message;
        }
    };
}

export function storeMatch(matchTime: number, blockTime: number) {
    return async function (dispatch: Dispatch<UserInfoActions>) {
        try {
            dispatch(getInfoPending());
            const time = matchTime;
            const block = blockTime;
            dispatch(getInfoSuccess(time, block));
            console.log("check success");
            return true;
        } catch (err: any) {
            dispatch(getInfoFail(err.message));
            return err.message;
        }
    };
}
