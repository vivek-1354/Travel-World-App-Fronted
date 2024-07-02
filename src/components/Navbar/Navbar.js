import React from "react";
import "./Navbar.css";
import { useAuth, useDate } from "../../context";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { state, dateDispatch } = useDate();
  const { destination, checkInDate, checkOutDate, guests } = state;

  const handleSearchClick = () => {
    dateDispatch({ type: "OPEN_SEARCH_MODAL" });
  };

  const handleAuthClick = () => {
    authDispatch({
      type: "OPEN_AUTH_MODAL",
    });
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
          TravelWorld
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
