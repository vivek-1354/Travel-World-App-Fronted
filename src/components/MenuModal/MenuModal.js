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

  const handleHomeClick = () => {
    dispatch(openMenuModal());
    navigate("/");
  };
  const handleCloseClick = () => {
    dispatch(openMenuModal());
  };

  const handleWishlistClick = () => {
    dispatch(openMenuModal());
    navigate("/wishlist");
  };

  return (
    <div className="auth-modal-containerr">
      <div className="auth-modall absolute shadow right-0">
        <div className="auth-modall-content">
          <div className="close-container">
            <span
              className="close-btn material-symbols-outlined"
              onClick={handleCloseClick}
            >
              arrow_back
            </span>
          </div>
          <span className="icons shadow" onClick={handleHomeClick}>
            <span className="material-symbols-outlined">home</span>
            Home
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">favorite</span>
            Wishlist
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">person</span>
            Account
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">policy</span>
            Policy
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">search</span>
            Destination
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">shop</span>
            Cart
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">flight</span>
            Flights
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">map</span>
            Map
          </span>
          <span className="icons shadow" onClick={handleWishlistClick}>
            <span className="material-symbols-outlined">luggage</span>
            Luggage
          </span>
          <span className="icons shadow" onClick={handleLogoutClick}>
            <span className="material-symbols-outlined">logout</span>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};
