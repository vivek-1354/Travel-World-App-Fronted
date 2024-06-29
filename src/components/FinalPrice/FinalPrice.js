import React from 'react'
import './FinalPrice.css'

export const FinalPrice = ({ hotel }) => {
    const { price, rating } = hotel
    return (
        <div className='price-details-container d-flex direction-column gap shadow'>
            <div className='price-rating d-flex align-center justify-space-between'>
                <p> <span className="fs-bold fs-large">Rs. {price}</span> / night</p>
                <span className="d-flex align-center">
                    <span className='material-symbols-outlined'>star</span><span>{rating}</span>
                </span>
            </div>
            <div className='d-flex direction-column'>
                <div className='grid-container-two-col selected-dates'>
                    <div className='checkin loc-container'>
                        <label htmlFor="">Check In</label>
                    </div>
                    <div className='checkin loc-container'>
                        <label htmlFor="">Check Out</label>
                    </div>
                </div>
                <div className="data gutter-sm guests">
                    <p>Guests</p>
                    <span >1 room, 2 adults</span>
                </div>
            </div>
            <div>
                <button className='button btn-reserve btn-primary cursor'>Reserve</button>
            </div>
            <div className='price-distribution d-flex direction-column'>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className='span'>Rs. {price} x 2 nights</span>
                    <span className='span'>Rs. {price * 2}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className='span'>Service charge</span>
                    <span className='span'>Rs. 150</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className='span'>Total</span>
                    <span className='span'>Rs.{(price * 2) + 150}</span>
                </div>
            </div>

        </div>
    )
}
