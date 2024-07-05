import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HotelCard,
  Navbar,
  SearchStayWithDate,
  AuthModal,
  MenuModal,
} from "../../components";
import "./SearchResult.css";
import { useSelector } from "react-redux";

export const SearchResults = () => {
  const dateState = useSelector((state) => state.dateReducer);
  const authState = useSelector((state) => state.authReducer);

  const { destination } = dateState;
  const [hotels, setHotels] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8000/api/hotels`);
      setHotels(response.data);
    })();
  }, []);

  const filteredHotels = hotels?.filter(
    ({ address, state, city, country }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      country.toLowerCase() === destination.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <section className="main d-flex align-center gap-larger">
        {filteredHotels ? (
          filteredHotels.map((hotel) => <HotelCard hotel={hotel} />)
        ) : (
          <h3>Nothing Found.</h3>
        )}
      </section>
      {dateState.isSearchModalOpen && <SearchStayWithDate />}
      {authState.isAuthModalOpen && <AuthModal />}
      {authState.isMenuModalOpen && <MenuModal />}
    </>
  );
};
