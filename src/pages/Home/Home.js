import { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

import { Categories, Filter, HotelCard, Navbar, SearchStayWithDate } from "../../components";
import { useCategory, useDate, useFilter } from '../../context';
import './Home.css'
import { getHotelByPrice, getHotelByRoomsAndBeds, getHotelsByPropertyType, getHotelsByRatings, getHotelsByFreeCancel } from '../../utils';


export const Home = () => {
    const [hasMore, setHasMore] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(15)
    const [testData, setTestData] = useState([])
    const [hotels, setHotels] = useState([])
    const { hotelCategory } = useCategory()
    const { state } = useDate()
    const { filterState } = useFilter()
    const { priceRange, isFilterModalOpen, noOfBeds, noOfBedrooms, noOfBathrooms, propertyType, noOfRatings, isCancelable } = filterState

    useEffect(() => {
        (
            async () => {
                const response = await axios.get(`http://localhost:8000/api/hotels?category=${hotelCategory}`)
                setTestData(response.data)
                setHotels(response.data ? response.data.slice(0, currentIndex) : [])
            }
        )()
    }, [hotelCategory, currentIndex])

    const fetchMoreData = () => {
        if (hotels.length === testData.length) {
            setHasMore(false)
            return
        }
        setTimeout(() => {
            if (hotels && hotels.length > 0) {
                setHotels(hotels.concat(testData.slice(currentIndex, currentIndex + 15)))
                setCurrentIndex(currentIndex + 15)
            } else {
                setHotels([])
            }
        }, 1000)
    }

    // const filteredHotelsByPrice = getHotelByPrice(hotels, priceRange)
    // const filteredHotelsByRoomsAndBeds = getHotelByRoomsAndBeds(hotels, noOfBathrooms, noOfBeds, noOfBedrooms)
    // const filteredHotelsByPropertyType = getHotelsByPropertyType(hotels, propertyType)
    // const filteredHotelsByRatings = getHotelsByRatings(hotels, noOfRatings)
    // const filteredHotelsByFreeCancel = getHotelsByFreeCancel(hotels, isCancelable )

    let filteredHotels = getHotelByPrice(hotels, priceRange)
    filteredHotels = getHotelByRoomsAndBeds(filteredHotels, noOfBathrooms, noOfBeds, noOfBedrooms)
    filteredHotels = getHotelsByPropertyType(filteredHotels, propertyType)
    filteredHotels = getHotelsByRatings(filteredHotels, noOfRatings)
    // filteredHotels = getHotelsByFreeCancel(hotels, isCancelable)
    return (
        <>
            <Navbar />
            <Categories />
            {
                hotels && hotels.length > 0 ? (
                    <InfiniteScroll
                        dataLength={hotels.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={hotels.length > 0 && <h4 className="alert-text">Loading...</h4>}
                        endMessage={
                            <p className='alert-text'>Noting more</p>
                        }
                    >
                        <main className="main">
                            {filteredHotels && filteredHotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                        </main>

                    </InfiniteScroll>) : (<></>)
            }
            {state.isSearchModalOpen && <SearchStayWithDate />}
            {isFilterModalOpen && <Filter />}
        </>

    )
}
