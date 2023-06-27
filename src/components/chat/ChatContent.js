import ChatHeader from "./ChatHeader";
import ChatMessageContent from "./ChatMessageContent";
import "./styles/ChatContent.scss";

function ChatContent() {
  return (
    <div className="chat-content">
      <ChatHeader />
      <ChatMessageContent />
    </div>
  );
}
export default ChatContent;
