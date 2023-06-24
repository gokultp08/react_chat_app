import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2a5298",
        darker: "#1e3c72",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
