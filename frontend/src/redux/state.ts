export interface AuthState {
    isAuthenticated: boolean | null;
    loading: boolean;
    username?: string;
    error?: string;
}

export interface JWTPayload {
    user_id: number;
    username: string;
}
