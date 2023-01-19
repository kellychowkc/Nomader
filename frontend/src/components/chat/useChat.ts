import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const { REACT_APP_API_SERVER } = process.env;
const SOCKET_SERVER_URL: string = REACT_APP_API_SERVER!;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

export default function useChat(roomId: string) {
  const [messages, setMessages] = useState<any>([]);
  const socketRef: any = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: any) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages: any) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody: string) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
}
