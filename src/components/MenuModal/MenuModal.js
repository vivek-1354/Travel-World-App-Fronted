import "./MenuModal.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export const MenuModal = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    authDispatch({
      type: "LOGOUT",
    });
    authDispatch({
      type: "OPEN_MENU_MODAL",
    });
    navigate("/");
  };
  return (
    <div className="auth-modal-containerr fixed">
      <div className="auth-modall absolute shadow right-0">
        <div className="d-flex direction-column justify-center shadow">
          <Link to="/wishlist">
            <span className="material-symbols-outlined">favorite</span>
            Wishlist
          </Link>
          <span onClick={handleLogoutClick}>
            <span className="material-symbols-outlined">logout</span>
            Logout
          </span>
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};
