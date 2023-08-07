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
import { getAllUsers, login } from "../../services/user-service";
import { storeAllUsers, storeCurrentUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const { sendMessage } = useContext(SnackbarContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    login(loginData)
      .then((res) => {
        const user = res.data.user;
        localStorage.setItem("userId", user["_id"]);
        localStorage.setItem("token", res.data.token);
        fetchAllUsers({
          email: user.email,
          name: user.name,
          bio: user.name,
          image: user.name,
        });
      })
      .catch((err) => {
        sendMessage(JSON.stringify(err));
      });
  };

  const fetchAllUsers = async (currentUser) => {
    const result = await getAllUsers();
    const allUsers = result.data.map((item) => {
      return {
        id: item["_id"],
        email: item.email,
        name: item.name,
        bio: item.name,
        image: item.name,
      };
    });
    dispatch(storeCurrentUser(currentUser));
    dispatch(storeAllUsers(allUsers));
    sendMessage("User Logged In");
    navigate("/chat");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {};

  const handleInputChange = (type, value) => {
    const newValue = { ...loginData };
    switch (type) {
      case "username":
        newValue.username = value;
        break;
      case "password":
        newValue.password = value;
        break;
    }
    setLoginData(newValue);
  };

  return (
    <div className="login">
      <Card sx={{ minWidth: 275, padding: "1rem" }}>
        <CardContent className="card">
          <TextField
            required
            id="standard-required"
            label="Username"
            variant="standard"
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            variant="standard"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </CardContent>
        <CardActions className="card">
          <div className="buttons">
            <Button variant="contained" onClick={() => handleLogin()}>
              Login
            </Button>
            <Button variant="outlined" onClick={() => handleReset()}>
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
      <Register open={open} onClose={() => handleClose()} />
    </div>
  );
}
