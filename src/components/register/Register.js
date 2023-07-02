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

  const { onClose, open } = props;

  const handleClose = (value) => {
    onClose(value);
  };

  const handleRegister = () => {
    setLoading(true);
    sendMessage("User Created");
  };

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Typography variant="h4" gutterBottom>
          Create New User Account
        </Typography>
      </DialogTitle>
      <DialogContent className="content">
        <div className="main-form">
          <div className="name">
            <div className="email">
              <TextField id="name" label="Name" variant="standard" />
              <TextField id="email" label="Email" variant="standard" />
            </div>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
          <TextField id="bio" label="Bio" variant="standard" />
          <TextField id="password" label="Password" variant="standard" />
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
