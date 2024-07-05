import "./MenuModal.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogout, openMenuModal } from "../../Redux/actions/authActions";

export const MenuModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(handleLogout());
    dispatch(openMenuModal());
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
