import { HotelCard, Navbar } from "../../components";
import axios from "axios";
import './Home.css'


import React from 'react'

export const Home = () => {
    const [hotels, setHotels] = React.useState([])

    React.useEffect(() => {
        (
            async () => {
                const response = await axios.get('http://localhost:8000/api/hotels')
                setHotels(response.data)
            }
        )()
    }, [])
    return (
        <>
            <Navbar />
            <main className="main">
                {hotels && hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
            </main>
        </>

    )
}
