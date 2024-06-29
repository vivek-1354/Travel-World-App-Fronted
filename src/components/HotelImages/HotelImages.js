import React from 'react'
import './HotelImages.css'

export const HotelImages = ({ hotel }) => {
    const { image, imageArr } = hotel

    return (
        <div className="hotel-image-container d-flex gap-5px">
            <div className="primary-image-conainer">
                <img src={image} alt="primary-img" className="hotel-img primary-img" />
            </div>
            <div className='d-flex wrap gap-small'>
                {
                    imageArr.map(img => <img key={img} className='hotel-img' src={img} alt="hotel-image" />)
                }
            </div>

        </div>
    )
}
