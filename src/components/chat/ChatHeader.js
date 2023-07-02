import { Typography } from "@mui/material";
import "./styles/ChatContent.scss";

function ChatHeader() {
  return (
    <div className="chat-header">
      <Typography variant="h5" gutterBottom>
        USerName
      </Typography>
    </div>
  );
}
export default ChatHeader;
