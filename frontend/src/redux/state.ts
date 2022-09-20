export interface AuthState {
    isAuthenticated: boolean | null;
    loading: boolean;
    username?: string;
    id?: number;
    error?: string;
}

export interface JWTPayload {
    user_id: number;
    username: string;
}

export interface UserInfoState {
    loading: boolean;
    interest?: number | null;
    error?: string;
}
