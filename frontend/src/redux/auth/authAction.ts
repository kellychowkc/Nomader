export function loginPending() {
    return {
        type: "@@Auth/LOGIN_PENDING" as const,
    };
}

export function loginSuccess(username?: string) {
    return {
        type: "@@Auth/LOGIN_SUCCESS" as const,
        username,
    };
}

export function loginFail(error: string) {
    return {
        type: "@@Auth/LOGIN_FAIL" as const,
        error,
    };
}

export type AuthActions =
    | ReturnType<typeof loginPending>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFail>;
