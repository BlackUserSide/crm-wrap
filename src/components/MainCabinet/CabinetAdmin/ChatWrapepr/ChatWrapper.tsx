import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
let socket: any;
export const ChatWrapper: React.FC = () => {
  const [messages, setMessages] = useState<Array<any>>([]);

  const endpoint = "http://192.168.0.123:5000";
  useMemo(() => {
    socket = io(endpoint);
    socket.emit("get", () => {});
    socket.on("message", (messages: any) => {
      setMessages(messages.res);
    });
    return () => {
      socket.emit("disconnects");
      socket.off();
    };
  }, [endpoint]);
  useEffect(() => {
    socket.on("newMessage", (message: any) => {
      let data = messages;
      data.push(message);
      console.log(data, "dsadsadsa");

      setMessages(data);
      data = [];
    });
    console.log(socket);
  }, [messages]);

  console.log(messages, "state");
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    socket.emit(
      "setMessage",
      { message: e.currentTarget.value, userId: "1" },
      () => {}
    );
  };
  return (
    <div className="chat-wrapper">
      <input
        type="text"
        onKeyPress={(e) => (e.key === "Enter" ? changeHandler(e) : "")}
      />
      <div className="log-wrapp">
        {messages.map((e: any, i: any) => (
          <p key={i}>{e.message}</p>
        ))}
      </div>
    </div>
  );
};
