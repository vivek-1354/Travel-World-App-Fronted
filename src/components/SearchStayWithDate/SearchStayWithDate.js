import { useDate } from '../../context'
import { DateSelector } from '../DateSelector/DateSelector'
import './SearchStayWithDate.css'

import React from 'react'

export const SearchStayWithDate = () => {

    const { dateDispatch } = useDate()

    const handleDestinationChange = (event) => {
        dateDispatch({ type: "SET_DESTINATION", payload: event.target.value })
        // console.log(event.target.value)
    }

    const handleGuestsChange = (event) => {
        dateDispatch({ type: "SET_GUESTS", payload: event.target.value })
        // console.log(event.target.value)
    }
    return (
        <div className='destination-container'>
            <div className="destionation-options d-flex align-center absolute">
                <div className="location-container">
                    <label className='label' htmlFor="">Where</label>
                    <input onChange={handleDestinationChange} placeholder='Search Destination' />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">Check in</label>
                    <DateSelector checkInType={"in"} />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">Check out</label>
                    <DateSelector checkInType={"out"} />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">No. of Guests</label>
                    <input type="text" placeholder='Add guests' onChange={handleGuestsChange} />
                </div>
                <div className="search-container d-flex align-center cursor">
                    <span className="material-symbols-outlined">search</span>
                    <span onClick={() => dateDispatch({ type: "OPEN_SEARCH_MODAL" })}>Search</span>
                </div>
            </div>
        </div>
    )
}

