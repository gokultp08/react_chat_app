import ChatContent from "./ChatContent";
import ChatSideNav from "./ChatSideNav";
import "./styles/ChatShell.scss";

function ChatShell() {
  return (
    <div className="chat-shell">
      <ChatSideNav />
      <ChatContent />
    </div>
  );
}
export default ChatShell;
