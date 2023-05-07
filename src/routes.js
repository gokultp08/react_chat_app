import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import UserShell from "./user/components/user-shell/UserShell";
import CreateUser from "./user/components/create-user/CreateUser";
import UserList from "./user/components/user-list/UserList";

export const routes = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  {
    path: "user",
    element: <UserShell />,
    children: [
      { path: "/user/:id", element: <CreateUser /> },
      { path: "/user/new", element: <CreateUser /> },
      { path: "/user/list", element: <UserList /> },
    ],
  },
]);
