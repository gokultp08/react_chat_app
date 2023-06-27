import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Header className="header" />
      <Outlet className="outlet" />
    </div>
  );
}

export default Home;
