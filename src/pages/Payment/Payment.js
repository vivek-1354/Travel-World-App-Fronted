import { Link, useNavigate, useParams } from "react-router-dom";
import "./Payment.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const Payment = () => {
  const dateState = useSelector((state) => state.dateReducer);
  const [hotel, setHotel] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/singlehotel/${id}`
        );
        setHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { image, name, address, rating, price, state } = hotel;

  const { checkInDate, checkOutDate, guests } = dateState;
  const numberOfNights =
    checkInDate && checkOutDate
      ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
      : 0;
  return (
    <>
      <header className="heading">
        <h1 className="heading-1">
          <Link className="link" to="/">
            Travel
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="55px"
                viewBox="0 -1000 950 960"
                width="55px"
                fill="darkgreen"
              >
                <path d="M435-63q-79-7-148-42.5t-118.58-92.15q-49.58-56.66-78.5-128.51Q61-398.02 61-480.05q0-85.87 33.16-162.14 33.17-76.28 90.37-133.43 57.21-57.16 133.79-90.77Q394.91-900 481-900q156.6 0 272.2 100.41Q868.8-699.19 895-549h-92q-17.56-81.02-69.79-143.31Q680.97-754.6 604-788v16.35q0 34.41-23.15 58.53Q557.71-689 522.84-689H439v84.7q0 17.88-12.5 27.59T394.7-567H316v85h107v121h-64.52L162-557q-5 19.11-7 37.89t-2 37.84Q153-356 232.5-263 312-170 435-155.2V-63Zm420-16L721-215q-21 12-43.46 19t-46.11 7q-75.09 0-127.76-52.29Q451-293.59 451-369t52.76-127.71Q556.53-549 631.94-549t127.74 52.34Q812-444.33 812-368.57q0 24.57-7.57 46.57T785-278.86L921-145l-66 66ZM630.9-280q36.38 0 62.74-26.04T720-368.86q0-36.78-26.06-62.96Q667.89-458 631.08-458q-36.38 0-62.23 26.06Q543-405.89 543-369.08q0 36.8 25.76 62.94T630.9-280Z" />
              </svg>
            </span>
            World
          </Link>
        </h1>
      </header>
      <main className="payment-page d-flex justify-center">
        <div className="final-details-container d-flex direction-column gap-md">
          <h2>Trip Details</h2>
          <div className="dates-and-guests d-flex direction-column gap-md">
            <h3>Your Trip</h3>
            <div>
              <p>Dates</p>
              <span>
                {checkInDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {checkOutDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div>
              <p>Guests</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className="d-flex direction-column gap-sm">
            <h3 className="pay-with">Pay with</h3>
            <div className="razorpay">Razorpay</div>
          </div>
          <button
            className="button btn-primary btn-reserve cursor btn-pay"
            onClick={() => navigate("/booking/successful")}
          >
            Confirm Booking
          </button>
        </div>
        <div className="final-details d-flex direction-column gap-large">
          <div className="d-flex gap">
            <img className="image" src={image} alt={name} />
            <div className="d-flex direction-column">
              <div className="d-flex direction-column grow-shrink-basis">
                <span>{name}</span>
                <span>
                  {address}, {state}
                </span>
              </div>
              <div className="rating-container">
                <span className="rating d-flex align-center">
                  <span className="material-symbols-outlined">star</span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="tag">
            Your booking is protected by{" "}
            <strong className="strong">TravelO</strong> cover
          </div>
          <div className="price-detail-container">
            <div className="price-distribution d-flex direction-column">
              <h3>Price Details</h3>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">
                  Rs. {price} x {numberOfNights} nights
                </span>
                <span className="span">Rs. {price * numberOfNights}</span>
              </div>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">Service fee</span>
                <span className="span">Rs. 200</span>
              </div>
              <div className="final-price d-flex align-center justify-space-between">
                <span className="span">Total</span>
                <span className="span">Rs. {price * numberOfNights + 200}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
