import React from "react";
import "./FinalPrice.css";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSetGuests } from "../../Redux/actions/dateActions";

export const FinalPrice = ({ hotel }) => {
  const { _id, price, rating } = hotel;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dateState = useSelector((state) => state.dateReducer);
  const { checkInDate, checkOutDate, guests } = dateState;

  const handleGuestChange = (e) => {
    dispatch(handleSetGuests(e.target.value));
  };

  const handleReserveClick = () => {
    navigate(`/confirm-payment/stay/${_id}`);
  };

  const numberOfNights =
    checkInDate && checkOutDate
      ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
      : 0;

  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          {" "}
          <span className="fs-bold fs-large">Rs. {price}</span> / night
        </p>
        <span className="d-flex align-center">
          <span className="material-symbols-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="selected-dates">
          <div className="checkin loc-container">
            <label htmlFor="">Check In</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="checkin loc-container">
            <label htmlFor="">Check Out</label>
            <DateSelector checkInType="out" />
          </div>
        </div>
        <div className="data gutter-sm guests">
          <p>Guests</p>
          {guests <= 0 ? (
            <input
              type="number"
              className="guest-count-input"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestChange}
            />
          ) : (
            <span>{`${guests} guests`} </span>
          )}
        </div>
      </div>
      <div>
        <button
          className="button btn-reserve btn-primary cursor"
          onClick={handleReserveClick}
          disabled={checkInDate && checkOutDate && guests > 0 ? false : true}
        >
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">
            Rs. {price} x {numberOfNights} nights
          </span>
          <span className="span">Rs. {price * numberOfNights}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service charge</span>
          <span className="span">Rs. 150</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs.{price * numberOfNights + 150}</span>
        </div>
      </div>
    </div>
  );
};
