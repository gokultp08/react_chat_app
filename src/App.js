import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.scss";
import { SnackBarProvider } from "./context/SnackBarProvider";
import { useContext, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { getAllUsers, verify } from "./services/user-service";
import { UserActions } from "./store/UserReducer";

function App() {
  const navigate = useNavigate();

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
      const user = await verify({ userId, token });
      store.dispatch({
        type: UserActions.STORE_CURRENT_USER,
        payload: {
          email: user.data.email,
          name: user.data.name,
          bio: user.data.name,
          image: user.data.name,
        },
      });
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
      store.dispatch({
        type: UserActions.STORE_ALL_USERS,
        payload: allUsers,
      });
    };

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (userId && token) {
      loadIfLoggedIn(userId, token);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackBarProvider>
          <div className="main">
            <Outlet />
          </div>
        </SnackBarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
