import type { InterestItem } from "../components/matching/InterestList";
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
    gender: string;
    birthday: string;
    username: string;
    email: string;
    password: string;
    phone_num: string;
    country: string;
    profile: Blob | File;
    job: string;
    information: string;
}

export interface PostForm {
    title: string;
    content: string;
    image: Blob | File;
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
    return fetchJson<{ token: string; username: string; id: number }>(
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
    const formData = new FormData();
    formData.append("first_name", signUpForm.first_name);
    formData.append("last_name", signUpForm.last_name);
    formData.append("gender", signUpForm.gender);
    formData.append("birthday", signUpForm.birthday);
    formData.append("username", signUpForm.username);
    formData.append("email", signUpForm.email);
    formData.append("password", signUpForm.password);
    formData.append("phone_num", signUpForm.phone_num);
    formData.append("country", signUpForm.country);
    formData.append("job", signUpForm.job);
    formData.append("information", signUpForm.information);
    formData.append("profile", signUpForm.profile);

    return fetchJson(`${REACT_APP_API_SERVER}/user/signUp`, {
        method: "POST",
        body: formData,
    });
}

export async function preMatching(userId: number) {
    console.log(JSON.stringify(userId));
    return fetchJson(`${REACT_APP_API_SERVER}/user/getInterest`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ uid: userId }),
    });
}

export async function addUserInterest(interestList: Array<InterestItem>) {
    return fetchJson(`${REACT_APP_API_SERVER}/user/interest`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(interestList),
    });
}

export async function newPost(postForm: PostForm) {
    const formData = new FormData();
    formData.append("title", postForm.title);
    formData.append("content", postForm.content);
    formData.append("image", postForm.image);
    console.log(formData);

    return fetchJson(`${REACT_APP_API_SERVER}/user/post`, {
        method: "POST",
        body: formData,
    });
}
