import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

import "./styles/ChatSideNav.scss";

function ChatSideNav() {
  const data = [
    {
      senderId: "123",
      receiverId: "123",
      image: "gdfgdsgf",
    },
    {
      senderId: "5435",
      receiverId: "5345",
      image: "gdfgdsgf",
    },
  ];

  return (
    <div className="chat-side-nav">
      <TextField variant="outlined" sx={{ width: "92%", bgcolor: "#fffff" }} />
      <List className="list" sx={{ width: "82%" }}>
        {data.map((item, index) => {
          return (
            <>
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="senderId" />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}
export default ChatSideNav;
