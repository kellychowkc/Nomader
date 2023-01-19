import express from "express";
import { chatRoomController } from "../server";

export const chatRoutes = express.Router();

chatRoutes.post("/get_user_chat_rooms", chatRoomController.getUserChatRooms);
chatRoutes.post("/get_room_info", chatRoomController.getRoomInfo);
chatRoutes.post("/get_last_messages", chatRoomController.getLastMessages);
chatRoutes.post("/get_chat_records", chatRoomController.getChatRecords);
chatRoutes.post("/open_chat", chatRoomController.openChat);
chatRoutes.post(
  "/get_room_infoByRoomTitle",
  chatRoomController.getRoomInfoByRoomTitle
);
