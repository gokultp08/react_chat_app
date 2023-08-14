import { useState } from "react";
import ChatItem from "./ChatItem";
import SendChat from "./SendChat";

import "./styles/ChatContent.scss";

function ChatMessageContent(props) {
  const { sendMessage, receiverDetails, chats, currentUser } = props;

  return (
    <div className="chat-message-content">
      <div className="chat-list">
        {chats.map((item, index) => {
          return <ChatItem key={index} chat={item} currentUser={currentUser} />;
        })}
      </div>
      <SendChat sendMessage={sendMessage} />
    </div>
  );
}
export default ChatMessageContent;
