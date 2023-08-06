import { useContext, useEffect } from "react";
import ChatContent from "./ChatContent";
import ChatSideNav from "./ChatSideNav";
import "./styles/ChatShell.scss";
import store from "../../store/store";

function ChatShell() {
  // const { loggedIn, currentUser, allUsers } = useContext(UserContext);
  useEffect(() => {
    // console.log("loggedIn", loggedIn, currentUser, allUsers);
    console.log("store data", store.getState());
  }, []);
  return (
    <div className="chat-shell">
      <ChatSideNav />
      <ChatContent />
    </div>
  );
}
export default ChatShell;
