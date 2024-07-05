import React from "react";
import "./BookingSuccess.css";

export const BookingSuccess = () => {
  return (
    <div className="booking-success-container">
      <div className="booking-success-content">
        <h1>Booking Successful!</h1>
        <p>
          Thank you for booking with us. Your reservation has been confirmed.
        </p>
        <p>We look forward to hosting you.</p>
        <button
          className="go-back-button"
          onClick={() => (window.location.href = "/")}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};
