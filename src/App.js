import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.scss";
import { SnackBarProvider } from "./context/SnackBarProvider";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
