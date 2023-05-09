import { Outlet } from "react-router-dom";

function UserShell() {
  return (
    <div>
      {" "}
      User Shell <Outlet />
    </div>
  );
}
export default UserShell;
