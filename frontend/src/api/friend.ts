import { fetchJson } from "./utils";

export interface OtherUser {
    id: number;
    username: string;
    country: string;
    job: string;
    information: string;
    interest: string;
}

const { REACT_APP_API_SERVER } = process.env;

export async function fetchOtherUserInfo(token: string) {
    return fetchJson<Array<OtherUser>>(
        `${REACT_APP_API_SERVER}/data/otherUser`
    );
}
