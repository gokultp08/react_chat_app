import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      Main APP Component
      {loggedIn && <Header />}
      <Outlet />
    </div>
  );
}

export default App;
