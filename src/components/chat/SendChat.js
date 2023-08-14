import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import "./styles/ChatContent.scss";
import { TextField, Tooltip } from "@mui/material";

function SendChat(props) {
  const { sendMessage } = props;
  const [message, setMessage] = useState("");
  return (
    <div className="send-chat">
      <TextField
        sx={{ width: "100%", border: "none" }}
        multiline
        rows={3}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Tooltip title="Send" arrow>
        <SendIcon
          sx={{ color: "#1e3c72" }}
          onClick={() => sendMessage(message)}
        />
      </Tooltip>
    </div>
  );
}
export default SendChat;
