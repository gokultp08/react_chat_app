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
import React from "react";
import { selectUser } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";

function ChatSideNav(props) {
  const { setChat } = props;
  const userState = useSelector(selectUser);
  // bio: "gokul";
  // email: "gokul@gmail.com";
  // id: "6485ef2dc4ca7c3da9d73ab5";
  // image: "gokul";
  // name: "gokul";
  const availableUsers = userState.allUsers.filter(
    (item) => item.id !== userState.currentUser.id
  );

  return (
    <div className="chat-side-nav">
      <TextField variant="outlined" sx={{ width: "92%", bgcolor: "#fffff" }} />
      <List className="list" sx={{ width: "82%" }}>
        {availableUsers.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem onClick={() => setChat(item)}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}
export default ChatSideNav;
