import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import { ROUTES } from "./utils/constants";
import ChatShell from "./components/chat/ChatShell";
import UserShell from "./components/user/UserShell";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTES.LOGIN, element: <Login />, index: true },
      {
        path: "",
        element: <Home />,
        children: [
          { path: ROUTES.CHAT, element: <ChatShell /> },
          { path: ROUTES.USER, element: <UserShell /> },
        ],
      },
    ],
  },
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    index: 1,
    children: [{ path: "", element: <Login />, index: true }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={routes} />;
}
