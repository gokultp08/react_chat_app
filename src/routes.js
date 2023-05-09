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
import UserDetails from "./user/components/user-details/UserDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      {
        path: "user",
        element: <UserShell />,
        lazy: () => import("./user/components/user-shell/UserShell"),
        children: [
          {
            path: "/user/:id",
            element: <UserDetails />,
            loader: async () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve("THis is data");
                  // resolve({
                  //   data2: "User Data",
                  // });
                }, 2500);
              });
            },
          },
          { path: "/user/new", element: <CreateUser /> },
          { path: "/user/list", element: <UserList /> },
        ],
      },
    ],
  },
]);
