import { Divider } from "@mui/material";
import ChatItem from "./ChatItem";
import SendChat from "./SendChat";
import "./styles/ChatContent.scss";
import { useState } from "react";

function ChatMessageContent() {
  const [data, setData] = useState([
    {
      id: "324234234",
      content: "hi",
      senderId: "1234",
      receiverId: "2345",
    },
    {
      id: "6546456",
      content: "hello",
      senderId: "2345",
      receiverId: "1234",
    },
    {
      id: "65463456",
      content: "fdsaffffdsfa fsdafasd f  f ds f sad f ads f ffffffffffffffff",
      senderId: "1234",
      receiverId: "2345",
    },
    {
      id: "23453254",
      content: "fdsafffffffffffffffffff",
      senderId: "1234",
      receiverId: "2345",
    },
    {
      id: "876868",
      content: "fdsafffffffff        dfgdfg   gdfgffffffffff",
      senderId: "2345",
      receiverId: "1234",
    },
    {
      id: "54352345",
      content: "fdsafffffffffffffffffff",
      senderId: "2345",
      receiverId: "1234",
    },
    {
      id: "54352435",
      content: "fdsafffffffffffffffffff",
      senderId: "1234",
      receiverId: "2345",
    },
    {
      id: "534534531",
      content: "fdsafffffffffffffffffff",
      senderId: "2345",
      receiverId: "1234",
    },
    {
      id: "54353451",
      content: "fdsafffffffffffffffffff",
      senderId: "1234",
      receiverId: "2345",
    },
  ]);

  return (
    <div className="chat-message-content">
      <div className="chat-list">
        {data.map((item, index) => {
          return <ChatItem key={index} chat={item} />;
        })}
      </div>
      <SendChat />
    </div>
  );
}
export default ChatMessageContent;
