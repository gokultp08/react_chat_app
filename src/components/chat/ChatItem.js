import "./styles/ChatContent.scss";
import DoneIcon from "@mui/icons-material/Done";

function ChatItem(props) {
  const { currentUser, chat } = props;

 
  return (
    <div
      className="chat-item"
      style={{
        alignSelf:
          props.chat.sender !== currentUser ? "flex-start" : "flex-end",
      }}
    >
      {props.chat.content}
      <DoneIcon />
    </div>
  );
}
export default ChatItem;
