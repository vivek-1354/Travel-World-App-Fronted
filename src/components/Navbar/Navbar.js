import React from "react";
import "./Navbar.css";
import { useAuth, useDate } from "../../context";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { Datestate, dateDispatch } = useDate();
  const { destination, checkInDate, checkOutDate, guests } = Datestate;

  const handleSearchClick = () => {
    dateDispatch({ type: "OPEN_SEARCH_MODAL" });
  };

  const handleAuthClick = () => {
    if (authState.accessToken) {
      authDispatch({
        type: "OPEN_MENU_MODAL",
      });
    } else {
      authDispatch({
        type: "OPEN_AUTH_MODAL",
      });
    }
  };

  const handleMenuClick = () => {
    // authDispatch({
    //   type: "OPEN_AUTH_MODAL",
    // });
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLogoutClick = () => {
    authDispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <h1 className="heading-title">
        <a className="link" href="/">
          Travel
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="45px"
              viewBox="0 -1000 950 960"
              width="45px"
              fill="darkgreen"
            >
              <path d="M435-63q-79-7-148-42.5t-118.58-92.15q-49.58-56.66-78.5-128.51Q61-398.02 61-480.05q0-85.87 33.16-162.14 33.17-76.28 90.37-133.43 57.21-57.16 133.79-90.77Q394.91-900 481-900q156.6 0 272.2 100.41Q868.8-699.19 895-549h-92q-17.56-81.02-69.79-143.31Q680.97-754.6 604-788v16.35q0 34.41-23.15 58.53Q557.71-689 522.84-689H439v84.7q0 17.88-12.5 27.59T394.7-567H316v85h107v121h-64.52L162-557q-5 19.11-7 37.89t-2 37.84Q153-356 232.5-263 312-170 435-155.2V-63Zm420-16L721-215q-21 12-43.46 19t-46.11 7q-75.09 0-127.76-52.29Q451-293.59 451-369t52.76-127.71Q556.53-549 631.94-549t127.74 52.34Q812-444.33 812-368.57q0 24.57-7.57 46.57T785-278.86L921-145l-66 66ZM630.9-280q36.38 0 62.74-26.04T720-368.86q0-36.78-26.06-62.96Q667.89-458 631.08-458q-36.38 0-62.23 26.06Q543-405.89 543-369.08q0 36.8 25.76 62.94T630.9-280Z" />
            </svg>
          </span>
          World
        </a>
      </h1>
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
      <nav className="d-flex align-center gap-large">
        {authState.accessToken && (
          <strong style={{ color: "black" }}>Hi, {authState.username}</strong>
        )}
        {authState.accessToken && (
          <span onClick={handleHomeClick} className="menu-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="grey"
            >
              <path d="M138-98v-513.67L480-869l343 257v514H565v-308H395v308H138Z" />
            </svg>
          </span>
        )}
        {authState.accessToken && (
          <span onClick={handleWishlistClick} className="menu-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="grey"
            >
              <path d="m479-91-56-50q-107-99-177.5-170.5T133-441q-42-58-58.5-105.5T58-642q0-99 66.5-166.5T289-876q56 0 104.5 24.5T479-780q42-49 88.5-72.5T669-876q99 0 166 67.5T902-642q0 48-17 95t-58.5 105q-41.5 58-112 130T536-141l-57 50Z" />
            </svg>
          </span>
        )}
        {authState.accessToken && (
          <span onClick={handleLogoutClick} className="menu-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="grey"
            >
              <path d="M196.67-90.67q-43.83 0-74.92-31.08-31.08-31.09-31.08-74.92v-566.66q0-44.1 31.08-75.39Q152.84-870 196.67-870H486v106.67H196.67v566.66H486v106H196.67ZM646-255l-74.67-74 97-97.67h-315v-106H667l-97-97.66L644.67-705 870-479.33 646-255Z" />
            </svg>
          </span>
        )}
        <div className="nav d-flex align-center cursor-pointer">
          <span
            className="material-symbols-outlined profile-option menu"
            onClick={handleAuthClick}
          >
            menu
          </span>
          <span
            className="material-symbols-outlined profile-option person"
            onClick={handleMenuClick}
          >
            person
          </span>
        </div>
      </nav>
    </header>
  );
};
