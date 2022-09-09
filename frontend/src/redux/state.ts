export interface AuthState {
    isAuthenticated: boolean | null;
    error?: string;
}

export interface JWTPayload {
    user_id: number;
    username: string;
}
