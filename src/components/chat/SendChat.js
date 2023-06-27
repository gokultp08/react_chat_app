import SendIcon from "@mui/icons-material/Send";
import "./styles/ChatContent.scss";
import { TextField, Tooltip } from "@mui/material";

function SendChat() {
  return (
    <div className="send-chat">
      <TextField
        id="outlined-multiline-static"
        sx={{ width: "100%" }}
        multiline
        rows={3}
      />
      <Tooltip title="Send" arrow>
        <SendIcon />
      </Tooltip>
    </div>
  );
}
export default SendChat;
