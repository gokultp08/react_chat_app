import { useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="title">My App</div>
      <div className="actions">
        <div>USERS</div>
        <div>POSTS</div>
        <div onClick={handleLogout}>LOG OUT</div>
      </div>
    </div>
  );
}
