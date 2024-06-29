import { DateSelector } from '../DateSelector/DateSelector'
import './SearchStayWithDate.css'

import React from 'react'

export const SearchStayWithDate = () => {
    return (
        <div className='destination-container'>
            <div className="destination-options d-flex align-center">
                <div className="location-container">
                    <label className='label' htmlFor="">Where</label>
                    <input type="text" placeholder='Search Destination' />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">Check in</label>
                    <DateSelector />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">Check out</label>
                    <DateSelector />
                </div>
                <div className="location-container">
                    <label className='label' htmlFor="">No. of Guests</label>
                    <input type="text" placeholder='Add guests' />
                </div>
                <div className="search-container d-flex align-center cursor">
                    <span className="material-symbols-outlined">search</span>
                    <span>Search</span>
                </div>
            </div>
        </div>
    )
}

