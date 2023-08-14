import { useContext, useEffect, useState } from "react";
import moment from "moment";
import ChatContent from "./ChatContent";
import ChatSideNav from "./ChatSideNav";
import "./styles/ChatShell.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { selectApp } from "../../store/slices/appSlice";
import { addChat, getChatForReceiver } from "../../services/chat-service";

function ChatShell() {
  const count = useSelector(selectUser);
  const loading = useSelector(selectApp).loading;

  const dispatch = useDispatch();

  const [receiverDetails, setReceiverDetails] = useState(undefined);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (receiverDetails) {
      console.log("receiver details", receiverDetails, count);
      getChatForReceiver(count.currentUser.id, receiverDetails.id).then(
        (res) => {
          setChats(
            res.data.map((item) => {
              return {
                id: item["_id"],
                sender: item.sender,
                receiver: item.receiver,
                sentTime: item.sentTime,
                content: item.content,
                images: item.images,
                seen: item.seen,
              };
            })
          );
          console.log("idddd", res);
        }
      );
    }
  }, [receiverDetails]);

  const sendMessage = (msg) => {
    console.log("msgggg", msg);
    addChat({
      sender: count.currentUser.id,
      receiver: receiverDetails.id,
      sentTime: moment.now().toString(),
      content: msg,
      images: [],
      seen: false,
    }).then(
      (res) => {
        console.log("addedddd", res);
      },
      (err) => {}
    );
  };

  return (
    <div className="chat-shell">
      <ChatSideNav setChat={setReceiverDetails} />
      {receiverDetails && !loading && (
        <ChatContent
          currentUser={count.currentUser.id}
          sendMessage={sendMessage}
          receiverDetails={receiverDetails}
          chats={chats}
        />
      )}
      {(!receiverDetails || loading) && (
        <div style={{ marginLeft: "100px" }}>No Chat selected</div>
      )}
    </div>
  );
}
export default ChatShell;
