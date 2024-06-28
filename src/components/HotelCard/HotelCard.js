import React from 'react'
import './HotelCard.css'

export const HotelCard = ({ hotel }) => {
    const [isSelected, setIsSelected] = React.useState(false)

    const { image, name, price, rating, address, state } = hotel
    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div >
                <img className="img" src={image} alt={"hotel"} />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location">
                            {address}, {state}
                        </span>
                        <span className="rating d-flex align-center">
                            <span class="material-symbols-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>
                    <p className="hotel-name">{name}</p>
                    <p className="price-details">
                        <span className="price">Rs. {price}/</span>
                        <span>night</span>
                    </p>
                </div>
            </div>
            <button
                className="button btn-wishlist absolute d-flex align-center"
            >
                <span
                    className={`material-symbols-outlined favorite cursor ${isSelected ? "fav-selected" : ""
                        }`}
                    onClick={() => setIsSelected(!isSelected)}
                >
                    favorite
                </span>            </button>
        </div>
    )
}

