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

export interface InterestItem {
    item: string;
}

export interface InterestList {
    selectedItem: Array<string>;
}
