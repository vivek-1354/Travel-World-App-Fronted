import axios from "axios";
import { useState, useEffect } from "react";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDateFocus,
  handleSetDestination,
  handleSetDestinationFocus,
  handleSetGuests,
  openSearchModal,
} from "../../Redux/actions/dateActions";

export const SearchStayWithDate = () => {
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const dateState = useSelector((state) => state.dateReducer);
  const hotelCategory = useSelector((state) => state.categoryReducer);
  const navigate = useNavigate();

  const { destination, guests, isSearchResultOpen } = dateState;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `api/hotels?category=${hotelCategory.category}`
      );
      setHotels(response.data);
    })();
  }, [hotelCategory.category]);

  const handleDestinationChange = (event) => {
    dispatch(handleSetDestination(event.target.value));
  };

  const handleGuestsChange = (event) => {
    dispatch(handleSetGuests(event.target.value));
  };

  const handalSearchClick = () => {
    dispatch(openSearchModal());
    dispatch(handleDateFocus());
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
    dispatch(handleSetDestination(address));
    dispatch(handleDateFocus());
  };

  const handleDestinationFocus = () => {
    dispatch(handleSetDestinationFocus());
  };

  return (
    <div className="destination-container">
      <div className="destionation-options  absolute">
        <div className="d-flex align-center">
          <div className="">
            <label className="label" htmlFor="">
              Where
            </label>
            <input
              value={destination}
              onChange={handleDestinationChange}
              onFocus={handleDestinationFocus}
              placeholder="Search Destination"
              autoFocus
              required={true}
            />
          </div>
          <div className="">
            <label className="label" htmlFor="">
              Check in
            </label>
            <DateSelector checkInType={"in"} />
          </div>
          <div className="">
            <label className="label" htmlFor="">
              Check out
            </label>
            <DateSelector checkInType={"out"} />
          </div>
          <div className="">
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
          <button
            className="search-container d-flex align-center cursor"
            onClick={handalSearchClick}
            disabled={destination ? false : true}
          >
            <span className="material-symbols-outlined">search</span>
            <span>Search</span>
          </button>
          <button
            className="search-container closee d-flex align-center cursor"
            onClick={() => dispatch(openSearchModal())}
          >
            <span>Close</span>
          </button>
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
    </div>
  );
};
