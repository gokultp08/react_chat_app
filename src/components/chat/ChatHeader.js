import { Typography } from "@mui/material";
import "./styles/ChatContent.scss";

function ChatHeader(props) {
  const { receiverDetails } = props;
  return (
    <div className="chat-header">
      <Typography variant="h5" gutterBottom>
        {receiverDetails?.name}
      </Typography>
    </div>
  );
}
export default ChatHeader;
