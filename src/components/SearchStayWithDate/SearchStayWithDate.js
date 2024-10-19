import axios from "axios";
import { useState, useEffect } from "react";
import { useCategory, useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const [hotels, setHotels] = useState([]);
  const { Datestate, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const navigate = useNavigate();

  const { destination, guests, isSearchResultOpen } = Datestate;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/hotels?category=${hotelCategory}`
      );
      setHotels(response.data);
    })();
  }, [hotelCategory]);

  const handleDestinationChange = (event) => {
    dateDispatch({ type: "SET_DESTINATION", payload: event.target.value });
  };

  const handleGuestsChange = (event) => {
    dateDispatch({ type: "SET_GUESTS", payload: event.target.value });
  };

  const handalSearchClick = () => {
    dateDispatch({ type: "OPEN_SEARCH_MODAL" });
    dateDispatch({ type: "DATE_FOCUS" });
    navigate(`/hotels/${destination}/result`);
  };

  const destinationOptions = hotels.filter(
    ({ address, state, city, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  const handleDestinationSearch = (address) => {
    dateDispatch({
      type: "SET_DESTINATION",
      payload: address,
    });
    dateDispatch({ type: "DATE_FOCUS" });
  };

  const handleDestinationFocus = () => {
    dateDispatch({ type: "DESTINATION_FOCUS" });
  };

  return (
    <div className="destination-container">
      <div className="destionation-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label" htmlFor="">
            Where
          </label>
          <input
            value={destination}
            onChange={handleDestinationChange}
            onFocus={handleDestinationFocus}
            placeholder="Search Destination"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label" htmlFor="">
            Check in
          </label>
          <DateSelector checkInType={"in"} />
        </div>
        <div className="location-container">
          <label className="label" htmlFor="">
            Check out
          </label>
          <DateSelector checkInType={"out"} />
        </div>
        <div className="location-container">
          <label className="label" htmlFor="">
            No. of Guests
          </label>
          <input
            value={guests}
            type="text"
            placeholder="Add guests"
            onChange={handleGuestsChange}
          />
        </div>
        <div className="search-container d-flex align-center cursor">
          <span className="material-symbols-outlined">search</span>
          <span onClick={handalSearchClick}>Search</span>
        </div>
      </div>
      <div className="search-result-container absolute">
        {isSearchResultOpen &&
          destinationOptions &&
          destinationOptions.map(({ address, city }) => (
            <p
              className="p cursor-pointer"
              onClick={() => handleDestinationSearch(address)}
            >
              {address}, {city}
            </p>
          ))}
      </div>
    </div>
  );
};
