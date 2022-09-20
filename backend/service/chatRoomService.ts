import { Knex } from "knex";

export class chatRoomService {
    constructor(private knex: Knex) {}

    async geUserIdWhoYouWantToMatch( id : number ) {
        const userId : Array<{ id : number }> = await this.knex("users_relationship")
            .select("user2_id")
            .where("user1_id", id);
        return userId;
    }

    async checkAlreadyMatchedUser(myId : number, userId : number) {
        const matchId : Array<{ id : number }> = await this.knex("users_relationship")
            .select("id")
            .where("user1_id", myId)
            .andWhere("user2_id", userId);
        if (matchId.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    async unlikeUser(myId : number, userId : number) {
        const unlike = await this.knex("users_relationship")
            .where("user1_id", myId)
            .andWhere("user2_id", userId)
            .del();
        if (unlike) {
            return true;
        } else {
            return false;
        }
    }

    async checkChatRoomId(id: number, userId: number) {
        const roomOneId : Array<{ id : number }> = await this.knex("chat_rooms")
            .select("id")
            .where("user_manager_id", id)
            .andWhere("user_member_id", userId);
        const roomTwoId : Array<{ id : number }> = await this.knex("chat_rooms")
            .select("id")
            .where("user_manager_id", userId)
            .andWhere("user_member_id", id);
        if (roomOneId.length > 0) {
            return roomOneId[0]["id"];
        } else if (roomTwoId.length > 0) {
            return roomTwoId[0]["id"];
        } else {
            return 0;
        }
    }

    async getChatRoomInfo(roomId : number) {
        const roomData : Array<{ room_title : string, user_manager_id : number, user_member_id : number, created_at : Date }> = await this.knex("chat_rooms")
            .select("room_title", "user_manager_id", "user_member_id", "created_at")
            .where("id", roomId);
        if (roomData.length > 0) {
            const managerUser : Array<{ username : string }> = await this.knex("users")
                .select("username")
                .where("id", roomData[0]["user_manager_id"]);
            const memberUser : Array<{ username : string }> = await this.knex("users")
                .select("username")
                .where("id", roomData[0]["user_member_id"]);
            const roomInfo = {
                title : roomData[0]["room_title"],
                manager : managerUser[0]["username"],
                member : memberUser[0]["username"],
                createdDate : roomData[0]["created_at"]
            }
            return roomInfo;
        } else {
            return {};
        }
    }

    async createChatRoom(myId : number, userId : number, title : string) {
        const newRoom : Array<{ id : number }> = await this.knex("chat_rooms")
            .insert([
                {
                    room_title : title,
                    user_manager_id : myId,
                    user_member_id : userId
                }
            ])
            .returning("id");
        if (newRoom.length > 0) {
            return newRoom[0]["id"];
        } else {
            return 0;
        }
    }

    async displayChat(roomId : number) {
        const chatData : Array<{ id : number, user_speech_id : number, content : string, image : string, voice : string, user_listen_id : number, created_at : Date }> = await this.knex("chats")
            .select("id", "user_speech_id", "content", "image", "voice", "user_listen_id", "created_at")
            .where("chat_room_id", roomId);
        if (chatData.length > 0) {
            return chatData;
        } else {
            return [];
        }
    }

    async newChatOfContentAndImage(myId : number, userId : number, newContent : string, newImage : string) {
        const newChat : Array<{ id : number }> = await this.knex("chats")
            .insert([
                {
                    user_speech_id : myId,
                    content : newContent,
                    image : newImage,
                    user_listen_id : userId
                }
            ])
            .returning("id");
        if (newChat.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    async newChatOfOnlyContent(myId : number, userId : number, newContent : string) {
        const newChat : Array<{ id : number }> = await this.knex("chats")
            .insert([
                {
                    user_speech_id : myId,
                    content : newContent,
                    user_listen_id : userId
                }
            ])
            .returning("id");
        if (newChat.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    async newChatOfOnlyImage(myId : number, userId : number, newImage : string) {
        const newChat : Array<{ id : number }> = await this.knex("chats")
            .insert([
                {
                    user_speech_id : myId,
                    image : newImage,
                    user_listen_id : userId
                }
            ])
            .returning("id");
        if (newChat.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    async newChatOfVoice(myId : number, userId : number, newVoice : string) {
        const newChat : Array<{ id : number }> = await this.knex("chats")
            .insert([
                {
                    user_speech_id : myId,
                    voice : newVoice,
                    user_listen_id : userId
                }
            ])
            .returning("id");
        if (newChat.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    async deleteChat(myId : number, chatId : number) {
        const chatData = await this.knex("chats")
            .where("user_speech_id", myId)
            .andWhere("chat_id", chatId)
            .del();
        if (chatData) {
            return true;
        } else {
            return false;
        }
    }

}