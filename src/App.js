import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";

import "./App.scss";
import { SnackBarProvider } from "./context/SnackBarProvider";
import { getAllUsers, verify } from "./services/user-service";
import { storeAllUsers, storeCurrentUser } from "./store/slices/userSlice";
import { selectApp, setLoading } from "./store/slices/appSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectApp).loading;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2a5298",
        darker: "#1e3c72",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
  });

  useEffect(() => {
    const loadIfLoggedIn = async (userId, token) => {
      verify({ userId, token }).then(
        async (user) => {
          console.log("userrrrrr", user);
          const users = await getAllUsers();
          const allUsers = users.data.map((item) => {
            return {
              id: item["_id"],
              email: item.email,
              name: item.name,
              bio: item.name,
              image: item.name,
            };
          });
          dispatch(
            storeCurrentUser({
              email: user.data.user.email,
              name: user.data.user.name,
              bio: user.data.user.bio,
              image: user.data.user.image,
              id: user.data.user["_id"],
            })
          );
          dispatch(storeAllUsers(allUsers));
          dispatch(setLoading(false));
        },
        (err) => {
          localStorage.clear();
          navigate("/login");
        }
      );
    };

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      dispatch(setLoading(true));
      loadIfLoggedIn(userId, token);
    } else {
      navigate("/login");
    }
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="blue"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SnackBarProvider>
        <div className="main">
          <Outlet />
        </div>
      </SnackBarProvider>
    </ThemeProvider>
  );
}

export default App;
