import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";

import "./Register.scss";
import { SnackbarContext } from "../../context/SnackBarProvider";
import { addUser } from "../../services/user-service";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
  },
  "& .MuiDialogTitle-root": {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
}));

export default function Register(props) {
  const { sendMessage } = React.useContext(SnackbarContext);

  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    image: "",
  });

  const { onClose, open } = props;

  const handleClose = (value) => {
    onClose(value);
  };

  const handleRegister = () => {
    setLoading(true);
    console.log("userData", userData);
    addUser(userData)
      .then((res) => {
        sendMessage("User Created");
        onClose(null);
      })
      .catch((err) => {
        sendMessage(JSON.stringify(err));
        setLoading(false);
      });
  };

  const handleInputChange = (type, value) => {
    const newValue = { ...userData };
    switch (type) {
      case "name":
        newValue.name = value;
        break;
      case "email":
        newValue.email = value;
        break;
      case "bio":
        newValue.bio = value;
        break;
      case "password":
        newValue.password = value;
        break;
      case "image":
        newValue.image = value;
        break;
    }
    setUserData(newValue);
  };

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Typography component={"span"} variant="h5" gutterBottom>
          Create New User Account
        </Typography>
      </DialogTitle>
      <DialogContent className="content">
        <div className="main-form">
          <div className="name">
            <div className="email">
              <TextField
                id="name"
                label="Name"
                variant="standard"
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="standard"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <TextField
            id="bio"
            label="Bio"
            variant="standard"
            onChange={(e) => handleInputChange("bio", e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <div className="buttons">
            {!loading && (
              <Button variant="contained" onClick={() => handleRegister()}>
                Register
              </Button>
            )}
            {loading && (
              <LoadingButton loading variant="contained">
                Register
              </LoadingButton>
            )}
            <Button variant="outlined" onClick={() => handleClose(null)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
}

// Register.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };
