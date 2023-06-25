import { useNavigate } from "react-router-dom";
import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import SendIcon from "@mui/icons-material/Send";

import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  const handleEditUser = () => {
    navigate("/user");
  };
  const handleChat = () => {
    navigate("/chat");
  };

  return (
    <div className="header">
      <div className="title">
        <IconButton color="secondary" aria-label="add to shopping cart">
          <SendIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          Chat App
        </Typography>
      </div>
      <div className="actions">
        <Tooltip title="Edit User">
          <IconButton color="secondary" onClick={handleEditUser}>
            <FaceRetouchingNaturalIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Chat">
          <IconButton color="secondary" onClick={handleChat}>
            <ChatIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout">
          <IconButton onClick={handleLogout} color="secondary">
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
