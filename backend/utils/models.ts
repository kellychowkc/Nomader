export interface User {
    id: number;
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    birthday?: string;
    gender?: string;
    information?: string;
    profile?: string;
    email?: string;
    phone_num?: number;
    job_id?: number;
    country_id?: number;
}

export interface Interest {
    id: number;
    title: string;
}

export interface Post {
    user_id: number;
    title: string;
    content: string;
    image: string;
}
