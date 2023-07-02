import SendIcon from "@mui/icons-material/Send";
import "./styles/ChatContent.scss";
import { TextField, Tooltip } from "@mui/material";

function SendChat() {
  return (
    <div className="send-chat">
      <TextField sx={{ width: "100%", border: "none" }} multiline rows={3} />
      <Tooltip title="Send" arrow>
        <SendIcon sx={{ color: "#1e3c72" }} />
      </Tooltip>
    </div>
  );
}
export default SendChat;
