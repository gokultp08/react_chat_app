import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useState } from "react";
import "./Login.scss";
import Register from "../register/Register";
import { useContext } from "react";
import { SnackbarContext } from "../../context/SnackBarProvider";

export default function Login() {
  const { sendMessage } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleLogin = () => {
    sendMessage("Logged In");
    navigate("/chat");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleReset = () => {};

  return (
    <div className="login">
      <Card sx={{ minWidth: 275, padding: "1rem" }}>
        <CardContent className="card">
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            variant="standard"
          />
        </CardContent>
        <CardActions className="card">
          <div className="buttons">
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <Divider />
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              handleClickOpen();
            }}
          >
            Don't have an account? Click here !
          </Link>
        </CardActions>
      </Card>
      <Register
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
