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
          className="favorite cursor-pointer"
          onClick={() => setIsSelected(!isSelected)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill={
              wishlistState.wishlist.find((hotel) => hotel._id === _id)
                ? "#EA3323"
                : "grey"
            }
          >
            <path d="m479-60-87-79q-108-98-178-168.5T104-434q-40-56-55.5-103.5T33-637q0-113 76-189.5T298-903q50 0 96.5 17.5T479-836q38-32 84.5-49.5T660-903q113 0 190 76.5T927-637q0 51-15.5 98.5t-55.5 103Q816-380 746-309T566-139l-87 79Z" />
          </svg>
        </span>{" "}
      </button>
    </div>
  );
};
