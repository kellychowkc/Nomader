export interface AuthState {
    isAuthenticated: boolean | null;
    loading: boolean;
    username?: string;
    id?: number;
    error?: string;
    // Added by danny
    isAdmin?: boolean;
}

export interface JWTPayload {
    user_id: number;
    username: string;
}

export interface ManageUserState {
    loading: boolean;
    userList?: Array<UserListState | null>
    error?: string;
}

export interface UserListState {
    username: string;
    fullname: string;
    avatar: string;
}

export interface UserInfoState {
    loading: boolean;
    interest?: number | null;
    error?: string;
}
