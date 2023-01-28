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

            if (!foundChatRoom) {
                res.status(401).json({
                    success: false,
                    message: "No Chat Room",
                });
                return;
            }

            foundChatRoom.forEach((record: any) => {
                let originalTimestamp = new Date(record.room_updated_at);
                originalTimestamp.setHours(originalTimestamp.getHours());
                let newTime = new Date(originalTimestamp);
                let hour;
                let minutes;
                newTime.getHours() < 10
                    ? (hour = "0" + newTime.getHours())
                    : (hour = newTime.getHours());

                newTime.getMinutes() < 10
                    ? (minutes = "0" + newTime.getMinutes())
                    : (minutes = newTime.getMinutes());

                let time = `${hour}:${minutes}`;

                record.room_updated_at = time;
            });

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

            if (!foundChatRecords) {
                res.status(401).json({
                    success: false,
                    message: "No Room Info",
                });
                return;
            }

            foundChatRecords.forEach((record: any) => {
                let originalTimestamp = new Date(record.created_at);
                originalTimestamp.setHours(originalTimestamp.getHours());
                let newTime = new Date(originalTimestamp);
                let hour;
                let minutes;

                newTime.getHours() < 10
                    ? (hour = "0" + newTime.getHours())
                    : (hour = newTime.getHours());

                newTime.getMinutes() < 10
                    ? (minutes = "0" + newTime.getMinutes())
                    : (minutes = newTime.getMinutes());

                let time = `${hour}:${minutes}`;

                record.created_at = time;
            });

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

            res.status(201).json({
                success: true,
                message: "Chat Room opened",
                result: resp,
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
            const roomId: number = req.body.roomId;
            const newContent: string = req.body.newContent;

            const resp = await this.chatRoomService.newChatOfOnlyContent(
                myId,
                userId,
                roomId,
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
