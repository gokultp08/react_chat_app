import { useContext, useEffect, useState } from "react";
import ChatContent from "./ChatContent";
import ChatSideNav from "./ChatSideNav";
import "./styles/ChatShell.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { selectApp } from "../../store/slices/appSlice";
import { getChatForReceiver } from "../../services/chat-service";

function ChatShell() {
  const count = useSelector(selectUser);
  const loading = useSelector(selectApp).loading;

  const dispatch = useDispatch();

  const [chat, setChat] = useState(undefined);

  useEffect(() => {
    if (chat) {
      console.log("counttt", count);
      getChatForReceiver(count.currentUser.id, chat.id).then((res) => {
        console.log("idddd", res);
      });
    }
  }, [chat]);

  console.log("child data", count);
  return (
    <div className="chat-shell">
      <ChatSideNav setChat={setChat} />
      {chat && !loading && <ChatContent />}
      {(!chat || loading) && (
        <div style={{ marginLeft: "100px" }}>No Chat selected</div>
      )}
    </div>
  );
}
export default ChatShell;
