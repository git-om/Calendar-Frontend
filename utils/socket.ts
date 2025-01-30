import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:4000/graphql"; // Change this to your backend URL in production

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});
