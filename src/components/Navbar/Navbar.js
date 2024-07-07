import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  openAuthModal,
  openMenuModal,
  handleLogout,
} from "../../Redux/actions/authActions";
import { openSearchModal } from "../../Redux/actions/dateActions";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer);
  const dateState = useSelector((state) => state.dateReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const { username, accessToken } = authState;
  const { destination, checkInDate, checkOutDate, guests } = dateState;

  const color = "#FF6525";
  const handleSearchClick = () => {
    dispatch(openSearchModal());
  };

  const handleAuthClick = () => {
    if (accessToken) {
      dispatch(openMenuModal());
    } else {
      dispatch(openAuthModal());
    }
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLogoutClick = () => {
    dispatch(handleLogout());
    navigate("/");
  };

  return (
    <header className="heading">
      <div className="name">
        <h1 className="heading-title">
          <a className="link" href="/">
            <span className="brand">Travel</span>
            {/* World */}
          </a>
        </h1>
        <span>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // height="50px"
              viewBox="0 -1000 950 960"
              // width="50px"
              fill="lightseagreen"
              className="logo"
            >
              <path d="M435-63q-79-7-148-42.5t-118.58-92.15q-49.58-56.66-78.5-128.51Q61-398.02 61-480.05q0-85.87 33.16-162.14 33.17-76.28 90.37-133.43 57.21-57.16 133.79-90.77Q394.91-900 481-900q156.6 0 272.2 100.41Q868.8-699.19 895-549h-92q-17.56-81.02-69.79-143.31Q680.97-754.6 604-788v16.35q0 34.41-23.15 58.53Q557.71-689 522.84-689H439v84.7q0 17.88-12.5 27.59T394.7-567H316v85h107v121h-64.52L162-557q-5 19.11-7 37.89t-2 37.84Q153-356 232.5-263 312-170 435-155.2V-63Zm420-16L721-215q-21 12-43.46 19t-46.11 7q-75.09 0-127.76-52.29Q451-293.59 451-369t52.76-127.71Q556.53-549 631.94-549t127.74 52.34Q812-444.33 812-368.57q0 24.57-7.57 46.57T785-278.86L921-145l-66 66ZM630.9-280q36.38 0 62.74-26.04T720-368.86q0-36.78-26.06-62.96Q667.89-458 631.08-458q-36.38 0-62.23 26.06Q543-405.89 543-369.08q0 36.8 25.76 62.94T630.9-280Z" />
            </svg>
          </a>
        </span>
      </div>

      <div
        className="form-container d-flex align-center cursor-pointer"
        onClick={handleSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkInDate && checkOutDate
            ? `${checkInDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })} - ${checkOutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {guests > 0 ? `${guests} guests` : "Any Guests"}
        </span>
        <span className="search material-symbols-outlined">search</span>
      </div>
      <nav className="nav-menu d-flex align-center">
        {accessToken && (
          <span
            onClick={handleSearchClick}
            className="menu-icons search-icon material-symbols-outlined"
          >
            search
          </span>
        )}
        {accessToken && (
          <span
            onClick={handleHomeClick}
            className="menu-icons material-symbols-outlined"
          >
            home
          </span>
        )}
        {accessToken && (
          <span
            onClick={handleWishlistClick}
            className="menu-icons material-symbols-outlined"
          >
            favorite
            <span className="countt">
              {wishlistState.wishlist.length > 0 && (
                <strong>{wishlistState.wishlist.length}</strong>
              )}
            </span>
          </span>
        )}
        {accessToken && (
          <span
            onClick={handleLogoutClick}
            className="menu-icons material-symbols-outlined"
          >
            logout
          </span>
        )}
        {accessToken && (
          <strong className="username">{username[0].toUpperCase()}</strong>
        )}
        {!accessToken && (
          <div className="nav d-flex align-center cursor-pointer">
            <span
              className="material-symbols-outlined profile-option menu"
              onClick={handleAuthClick}
            >
              menu
            </span>
            <span
              className="material-symbols-outlined profile-option person"
              onClick={handleAuthClick}
            >
              person
            </span>
            <span
              className="menu-search material-symbols-outlined"
              onClick={handleSearchClick}
            >
              search
            </span>
          </div>
        )}
      </nav>
    </header>
  );
};
