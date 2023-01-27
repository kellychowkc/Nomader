import { ChatRoomService } from "../service/chatRoomService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { User } from "../utils/models";

export class ChatRoomController {
    constructor(private chatRoomService: ChatRoomService) {}

    getUserChatRooms = async (req: Request, res: Response) => {
        try {
            const user_id: number = req.body.uid;

            const foundChatRoom = await this.chatRoomService.getAllChatInfo(
                user_id
            );
            // console.log(`<getUserChatRooms> Chat Rooms Found = ${foundChatRoom}`);
            if (!foundChatRoom) {
                res.status(401).json({
                    success: false,
                    message: "No Chat Room",
                });
                return;
            }
            res.status(201).json({
                success: true,
                message: "Chat Room Found",
                data: foundChatRoom,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getRoomInfo = async (req: Request, res: Response) => {
        try {
            const room_ids: any = req.body.room_ids;

            const foundRoomInfo = await this.chatRoomService.getChatRoomInfo(
                room_ids[0].id
            );
            console.log(foundRoomInfo);
            if (!foundRoomInfo) {
                res.status(401).json({
                    success: false,
                    message: "No Room Info",
                });
                return;
            }
            res.status(201).json({
                success: true,
                message: "Room Info Found",
                data: foundRoomInfo,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getLastMessages = async (req: Request, res: Response) => {
        try {
            const room_ids: any = req.body.room_ids;

            const foundLastMessages =
                await this.chatRoomService.getLastMessages(room_ids);

            if (!foundLastMessages) {
                res.status(401).json({
                    success: false,
                    message: "No Room Info",
                });
                return;
            }
            res.status(201).json({
                success: true,
                message: "Last Messages Found",
                data: foundLastMessages,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getChatRecords = async (req: Request, res: Response) => {
        try {
            const room_title: any = req.body.room_title;

            const foundChatRecords = await this.chatRoomService.getChatRecords(
                room_title
            );
            console.log("check2", foundChatRecords);
            if (!foundChatRecords) {
                res.status(401).json({
                    success: false,
                    message: "No Room Info",
                });
                return;
            }
            res.status(201).json({
                success: true,
                message: "Chat Record Found",
                data: foundChatRecords,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    openChat = async (req: Request, res: Response) => {
        try {
            const roomTitle: any = req.body.roomTitle;
            const userManager: number = req.body.userManager;
            const userMember: number = req.body.userMember;

            const resp = await this.chatRoomService.openChat(
                roomTitle,
                userManager,
                userMember
            );

            console.log(resp);
            res.status(201).json({
                success: true,
                message: "Chat Room opened",
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
    getRoomInfoByRoomTitle = async (req: Request, res: Response) => {
        try {
            const uid: number = req.body.uid;
            const room_title: string = req.body.room_title;

            const foundRoomInfo =
                await this.chatRoomService.getRoomInfoByRoomTitle(
                    uid,
                    room_title
                );
            console.log("check getRoom", foundRoomInfo);
            if (!foundRoomInfo) {
                res.status(401).json({
                    success: false,
                    message: "No Room Info",
                });
                return;
            }
            res.status(201).json({
                success: true,
                message: "Room Info Found",
                data: foundRoomInfo,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    newChatOfOnlyContent = async (req: Request, res: Response) => {
        try {
            const myId: number = req.body.uid;
            const userId: number = req.body.userId;
            const newContent: string = req.body.newContent;

            const resp = await this.chatRoomService.newChatOfOnlyContent(
                myId,
                userId,
                newContent
            );

            res.status(201).json({
                success: true,
                message: "new chat updated",
                chat: resp,
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}

declare global {
    namespace Express {
        interface Request {
            user?: Omit<User, "password">;
        }
    }
}
