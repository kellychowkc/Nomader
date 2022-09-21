import { Dispatch } from "react";
// import { getAllUsers } from "../../api/user";
import { loadUserListPending, loadUserListSuccess, loadUserListFail, ManageUserActions } from "./manageUserAction";

export function getAllUsersList() {
    return async function (dispatch: Dispatch<ManageUserActions>) {
        try {
            dispatch(loadUserListPending());
            const AllUsersList: any = await getAllUsers();
            dispatch(loadUserListSuccess(AllUsersList));
            console.log("thunk", AllUsersList);
            return AllUsersList;
        } catch (err: any) {
            dispatch(loadUserListFail(err.message));
            return err.message;
        }
    };
}