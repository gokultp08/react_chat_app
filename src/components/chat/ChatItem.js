import "./styles/ChatContent.scss";
import DoneIcon from "@mui/icons-material/Done";

function ChatItem(props) {
  const myId = "1234";
  return (
    <div
      className="chat-item"
      style={{
        alignSelf: props.chat.senderId !== myId ? "flex-start" : "flex-end",
      }}
    >
      {props.chat.content}
      <DoneIcon />
    </div>
  );
}
export default ChatItem;
