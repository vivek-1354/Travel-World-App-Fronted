import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HotelCard, Navbar } from '../../components'
import { useDate } from '../../context'
import './SearchResult.css'

export const SearchResults = () => {
    const { state } = useDate()
    const { destination } = state
    const [hotels, setHotels] = useState()

    useEffect(() => {
        (
            async () => {
                const response = await axios.get(`http://localhost:8000/api/hotels`)
                setHotels(response.data)
                // console.log(response.data)
            }
        )()
    }, [])

    const filteredHotels = hotels?.filter(({ address, state, city, country }) => address.toLowerCase() === (destination.toLowerCase())
        || state.toLowerCase() === (destination.toLowerCase())
        || city.toLowerCase() === (destination.toLowerCase())
        || country.toLowerCase() === (destination.toLowerCase())

    )
    console.log(filteredHotels?.length)
    return (
        <>
            <Navbar />
            <section className="main d-flex align-center gap-larger">
                {filteredHotels ? filteredHotels.map(hotel => <HotelCard hotel={hotel} />) : <h3>Nothing Found.</h3>}
            </section>
        </>
    )
}

