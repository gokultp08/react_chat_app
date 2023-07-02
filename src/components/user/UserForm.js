import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";

import "./User.scss";
import { SnackbarContext } from "../../context/SnackBarProvider";

function UserForm() {
  const { sendMessage } = useContext(SnackbarContext);

  const handleSave = (value) => {
    sendMessage("User Details Saved");
  };

  const handleReset = () => {
    // navigate("/chat");
  };

  return (
    <div className="user-form">
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <div className="name-div">
        <div className="names">
          <TextField id="name" label="Name" variant="standard" />
          <TextField id="email" label="Email" variant="standard" disabled />
        </div>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
      <TextField
        id="bio"
        label="Bio"
        variant="standard"
        sx={{ width: "100%" }}
        multiline
        rows={3}
      />
      <TextField id="password" label="Password" variant="standard" />
      <div className="buttons">
        <Button variant="contained" onClick={() => handleSave()}>
          Save
        </Button>
        <Button variant="outlined" onClick={() => handleReset(null)}>
          Reset
        </Button>
      </div>
    </div>
  );
}
export default UserForm;
