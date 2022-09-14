import { fetchJson } from "./utils";

// let REACT_APP_API_SERVER: any;
// const env = process.env;
// switch (env.NODE_ENV) {
//     case "development":
//         REACT_APP_API_SERVER = env.REACT_APP_API_SERVER;
// }

const { REACT_APP_API_SERVER } = process.env;

export interface User {
    id: number;
    username: string;
}

export interface LoginForm {
    username: string;
    password: string;
}

export interface SignUpForm {
    first_name: string;
    last_name: string;
    gender?: string;
    birthday?: string;
    username: string;
    email: string;
    password: string;
    phone_num: string;
    country?: string;
    profile?: string;
    job?: string;
    information?: string;
}

export async function fetchSelfUserInfo(token: string) {
    return (
        fetchJson<User>(`${REACT_APP_API_SERVER}/user`),
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}

export async function postLogin(loginForm: LoginForm) {
    return fetchJson<{ token: string; username: string }>(
        `${REACT_APP_API_SERVER}/user/login`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(loginForm),
        }
    );
}

export async function postSignUp(signUpForm: SignUpForm) {
    return fetchJson(`${REACT_APP_API_SERVER}/user/signUp`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(signUpForm),
    });
}
