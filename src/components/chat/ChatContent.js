import ChatHeader from "./ChatHeader";
import ChatMessageContent from "./ChatMessageContent";
import "./styles/ChatContent.scss";

function ChatContent(props) {
  const { sendMessage, receiverDetails, chats, currentUser } = props;
  return (
    <div className="chat-content">
      <ChatHeader receiverDetails={receiverDetails} />
      <ChatMessageContent sendMessage={sendMessage} chats={chats} currentUser ={currentUser}/>
    </div>
  );
}
export default ChatContent;
