import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
