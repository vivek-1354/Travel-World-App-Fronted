import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  AuthModal,
  Categories,
  Filter,
  HotelCard,
  MenuModal,
  Navbar,
  SearchStayWithDate,
} from "../../components";
import "./Home.css";
import {
  getHotelByPrice,
  getHotelByRoomsAndBeds,
  getHotelsByPropertyType,
  getHotelsByRatings,
  getHotelsByFreeCancel,
} from "../../utils";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(15);
  const [testData, setTestData] = useState([]);
  const [hotels, setHotels] = useState([]);

  const filterState = useSelector((state) => state.filterReducer);
  const authState = useSelector((state) => state.authReducer);
  const dateState = useSelector((state) => state.dateReducer);
  const hotelCategory = useSelector((state) => state.categoryReducer);

  const {
    priceRange,
    isFilterModalOpen,
    noOfBeds,
    noOfBedrooms,
    noOfBathrooms,
    propertyType,
    noOfRatings,
    isCancelable,
  } = filterState;

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/api/hotels?category=${hotelCategory?.category}`
      );
      setTestData(response.data);
      setHotels(response.data ? response.data.slice(0, currentIndex) : []);
    })();
  }, [hotelCategory?.category, currentIndex]);

  const fetchMoreData = () => {
    if (hotels.length === testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 15))
        );
        setCurrentIndex(currentIndex + 15);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const filteredHotelsByPrice = getHotelByPrice(hotels, priceRange);
  const filteredHotelsByRoomsAndBeds = getHotelByRoomsAndBeds(
    filteredHotelsByPrice,
    noOfBathrooms,
    noOfBeds,
    noOfBedrooms
  );
  const filterHotelsByPropertyType = getHotelsByPropertyType(
    filteredHotelsByRoomsAndBeds,
    propertyType
  );
  const filteredHotelsByRatings = getHotelsByRatings(
    filterHotelsByPropertyType,
    noOfRatings
  );
  const filteredHotelsByFreeCancel = getHotelsByFreeCancel(
    filteredHotelsByRatings,
    isCancelable
  );
  return (
    <>
      <Navbar />
      <Categories />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && <h4 className="alert-text">Loading...</h4>
          }
          endMessage={<p className="alert-text">Noting more</p>}
        >
          <main className="main">
            {filteredHotelsByFreeCancel &&
              filteredHotelsByFreeCancel.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
      {dateState.isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
      {authState.isAuthModalOpen && <AuthModal />}
      {authState.isMenuModalOpen && <MenuModal />}
    </>
  );
};
