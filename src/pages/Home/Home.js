import { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

import { Categories, HotelCard, Navbar } from "../../components";
import './Home.css'


export const Home = () => {
    const [hasMore, setHasMore] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(15)
    const [testData, setTestData] = useState([])
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('http://localhost:8000/api/hotels')
                setTestData(response.data)
                setHotels(response.data ? response.data.slice(0, currentIndex) : [])
            }
        )()
    }, [hotels, currentIndex])

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
                            {hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                        </main>

                    </InfiniteScroll>) : (<></>)
            }
        </>

    )
}
