import React from 'react'
import './HotelCard.css'

export const HotelCard = () => {
    const [isSelected, setIsSelected] = React.useState(false)
    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div >
                <img className="img" src={"https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"} alt={"hotel"} />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location">
                            {"Boring Road"}, {"Bihar"}
                        </span>
                        <span className="rating d-flex align-center">
                            <span class="material-symbols-outlined">star</span>
                            <span>{5}</span>
                        </span>
                    </div>
                    <p className="hotel-name">{"NewHotel"}</p>
                    <p className="price-details">
                        <span className="price">Rs. {500}</span>
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

