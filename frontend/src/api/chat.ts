import { fetchJson } from "./utils";

const { REACT_APP_API_SERVER } = process.env;

export interface User {
    id: number;
    username: string;
}

export interface UserChatRooms {
    room_id: string;
    username: string;
    profile: string;
    lastMessage: string;
    lastMessageTime: string;
    updated_at: string;
}

export async function getUserChatRooms(userId: number) {
    return fetchJson<any>(`${REACT_APP_API_SERVER}/chat/get_user_chat_rooms`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ uid: userId }),
    });
}

export async function getRoomInfo(roomId: any) {
    return fetchJson<any>(`${REACT_APP_API_SERVER}/chat/get_room_info`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ room_ids: roomId }),
    });
}

export async function getLastMessages(roomIds: any[]) {
    return fetchJson<any>(`${REACT_APP_API_SERVER}/chat/get_last_messages`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ room_ids: roomIds }),
    });
}

export async function getChatRecords(room_title: string) {
    return fetchJson<any>(`${REACT_APP_API_SERVER}/chat/get_chat_records`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ room_title: room_title }),
    });
}

export async function getRoomInfoByRoomTitle(uid: number, room_title: string) {
    return fetchJson<any>(
        `${REACT_APP_API_SERVER}/chat/get_room_infoByRoomTitle`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ uid: uid, room_title: room_title }),
        }
    );
}

export async function insertMessage(
    uid: number,
    userId: number,
    roomId: number,
    content: string
) {
    return fetchJson<any>(`${REACT_APP_API_SERVER}/chat/insertMessage`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            uid: uid,
            userId: userId,
            roomId: roomId,
            newContent: content,
        }),
    });
}
