import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { FinalPrice, HotelDetails, HotelImages, Navbar } from '../../components';
import './SingleHotel.css'

export const SingleHotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState();

    useEffect(() => {
        fetch(`http://localhost:8000/api/singlehotel/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [id])
    return (
        <>
            <Navbar />
            <main className="single-hotel-page">
                <p className='hotel-name-add'>{hotel && hotel.name} , {hotel && hotel.country}</p>
                {hotel && <HotelImages hotel={hotel} />}
                <div className='d-flex align-center'>
                    {hotel && <HotelDetails hotel={hotel} />}
                    {hotel && <FinalPrice hotel={hotel} />}
                </div>
            </main>

        </>
    )
}
