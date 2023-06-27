import { Divider } from "@mui/material";
import ChatItem from "./ChatItem";
import SendChat from "./SendChat";
import "./styles/ChatContent.scss";

function ChatMessageContent() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 78, 8, 8, 97, 6, 4, 3, 2, 4, 5, 76, 7, 7, 5, 3, 8, 8,
    97, 6, 4, 3, 2, 4, 5, 76, 7, 8, 8, 97, 6, 4, 3, 2, 4, 5, 76, 7,
  ];
  return (
    <div className="chat-message-content">
      <div className="chat-list">
        {data.map((item, index) => {
          return <ChatItem key={index} />;
        })}
      </div>
      <SendChat />
    </div>
  );
}
export default ChatMessageContent;
