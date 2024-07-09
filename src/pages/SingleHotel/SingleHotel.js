import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import {
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
  AuthModal,
  MenuModal,
} from "../../components";
import "./SingleHotel.css";
import { useSelector } from "react-redux";

export const SingleHotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState();
  const authState = useSelector((state) => state.authReducer);

  useEffect(() => {
    fetch(`/api/singlehotel/${id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, [id]);
  return (
    <>
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {hotel && hotel.name} , {hotel && hotel.country}
        </p>
        {hotel && <HotelImages hotel={hotel} />}
        <div className="final-detail">
          {hotel && <HotelDetails hotel={hotel} />}
          {hotel && <FinalPrice hotel={hotel} />}
        </div>
      </main>
      {authState.isAuthModalOpen && <AuthModal />}
      {authState.isMenuModalOpen && <MenuModal />}
    </>
  );
};
