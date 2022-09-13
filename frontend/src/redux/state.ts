export interface AuthState {
    isAuthenticated: boolean | null;
    loading: boolean;
    error?: string;
}

export interface JWTPayload {
    user_id: number;
    username: string;
}
