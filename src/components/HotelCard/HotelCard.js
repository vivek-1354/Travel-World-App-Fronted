import React from "react";
import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
import { useAuth, useWishlist } from "../../context";
import { findHotelInWishlist } from "../../utils";

export const HotelCard = ({ hotel }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();

  const { wishlistState, wishlistDispatch } = useWishlist();

  const isHotelInWishList = findHotelInWishlist(
    wishlistState.wishlist,
    hotel._id
  );

  const { _id, image, name, price, rating, address, state } = hotel;

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}/${_id}/reserve`);
  };

  const handleWishlistClick = () => {
    if (authState.accessToken) {
      if (!isHotelInWishList) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: hotel });
        navigate("/wishlist");
      } else if (isSelected) {
        wishlistDispatch({ type: "REMOVE_FRON_WISHLIST", payload: hotel._id });
      }
    } else {
      authDispatch({
        type: "OPEN_AUTH_MODAL",
      });
    }
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img className="img" src={image} alt={"hotel"} />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {address}, {state}
            </span>
            <span className="rating d-flex align-center">
              <span class="material-symbols-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">Rs. {price}/</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button
        className="button btn-wishlist absolute d-flex align-center"
        onClick={handleWishlistClick}
      >
        <span
          className={`material-symbols-outlined favorite cursor ${
            wishlistState.wishlist.find((hotel) => hotel._id === _id)
              ? "fav-selected"
              : ""
          }`}
          onClick={() => setIsSelected(!isSelected)}
        >
          favorite
        </span>{" "}
      </button>
    </div>
  );
};
